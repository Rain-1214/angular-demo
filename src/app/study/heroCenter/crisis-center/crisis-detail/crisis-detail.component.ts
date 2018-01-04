import { Component, OnInit } from '@angular/core';
import { CrisisService } from '../crisis.service';
import { Crisis } from '../crisis';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DialogService } from '../../dialog.service';

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
    private router: Router,
    public dialogService: DialogService
  ) { }

  ngOnInit() {
    // this.route
    //     .paramMap
    //     .switchMap((res: ParamMap) => this.crisisService.getCrisesById(+res.get('id')))
    //     .subscribe((crisis: Crisis) => {
    //       this.crisis = crisis;
    //       this.tempName = this.crisis.name;
    //     });

    this.route
        .data
        .subscribe((res: { crisis: Crisis }) => {
          console.log(res);
          this.tempName = res.crisis.name;
          this.crisis = res.crisis;
        });
  }

  saveCrisis(): void {
    this.crisisService.saveCrisis(this.crisis.id, this.tempName);
    this.back();
  }

  back(): void {
    this.router.navigate(['/heroCenter/crisisList']);
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.crisis || this.tempName === this.crisis.name) {
      return true;
    }

    return this.dialogService.confirm(`Discard Changes?`);
  }

}
