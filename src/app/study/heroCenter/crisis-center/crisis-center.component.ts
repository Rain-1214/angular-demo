import { Component, OnInit } from '@angular/core';
import { CrisisService } from './crisis.service';
import { Crisis } from './crisis';

@Component({
  selector: 'app-crisis-center',
  templateUrl: './crisis-center.component.html',
  styleUrls: ['./crisis-center.component.scss'],
  providers: [ CrisisService ]
})
export class CrisisCenterComponent implements OnInit {

  crises: Crisis[];

  constructor(
    private crisisService: CrisisService
  ) { }

  ngOnInit() {
    this.crisisService.getCrises().subscribe(res => this.crises = res);
  }

}
