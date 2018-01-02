import { Component, OnInit } from '@angular/core';
import { CrisisService } from '../crisis.service';
import { Crisis } from '../crisis';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {

  crisis: Crisis;
  tempName: string;

  constructor(
    private crisisService: CrisisService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route
        .paramMap
        .switchMap((res: ParamMap) => this.crisisService.getCrisesById(+res.get('id')))
        .subscribe((crisis: Crisis) => {
          this.crisis = crisis;
          this.tempName = this.crisis.name;
        });
  }

  saveCrisis(): void {
    this.crisisService.saveCrisis(this.crisis.id, this.tempName);
    this.back();
  }

  back(): void {
    this.router.navigate(['/heroCenter/crisisList']);
  }

}
