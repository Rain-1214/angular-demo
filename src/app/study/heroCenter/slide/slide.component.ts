import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  details: string;
  sending = false;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

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
    this.router.navigate([{ outlets: { popup: null }}]);
  }

}
