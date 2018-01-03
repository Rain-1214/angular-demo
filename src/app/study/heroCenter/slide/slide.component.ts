import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  details: string;
  sending = false;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {}

  send(): void {
    this.sending = true;
    this.details = 'Sending Message...';

    setTimeout(() => {
      this.sending = false;
      this.close();
    }, 1000);
  }

  cancel(): void {
    this.close();
  }


  close(): void {
    // this.router.navigate([{ outlets: { popup: null}}]); 我并不知道什么原因导致其不能关闭命名路由
    const url = this.router.url;
    const spliceIndex = url.indexOf('//') === -1 ? url.indexOf('(') - 1 : url.indexOf('//');
    const suffix = url.indexOf('//') === -1 ? '' : ')';
    const nextUrl = url.slice(0, spliceIndex) + suffix;
    this.router.navigateByUrl(nextUrl);
  }

}
