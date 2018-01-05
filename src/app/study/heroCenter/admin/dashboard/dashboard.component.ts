import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { PreloadingStrategy } from '@angular/router';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  session_id: Observable<string>;
  token: Observable<String>;
  models: String[];

  constructor(
    private router: ActivatedRoute,
    private preLoadStrategy: SelectivePreloadingStrategy
  ) {
    this.models = preLoadStrategy.preLoadingModels;
  }

  ngOnInit() {

    this.session_id = this.router
      .queryParamMap
      .map(params => params.get('session_id') || 'none');

    this.token = this.router
      .fragment
      .map(fragment => fragment || 'none');

  }

}
