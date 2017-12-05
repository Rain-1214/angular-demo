import { Component, OnInit, AfterViewInit, OnDestroy, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdItem } from './AdItem.model';
import { AdDirective } from '../../directive/ad.directive';
import { AdComponent } from './adDetail/ad.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements OnDestroy, OnInit {

  @Input() ads: AdItem[];
  @ViewChild(AdDirective) appAdHost: AdDirective;
  currentIndex = -1;
  subscription: any;
  interval: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  // ngAfterViewInit(): void {
  //   this.loadComponent();
  //   this.getAds();
  // }

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  loadComponent(): void {

    this.currentIndex = (this.currentIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.appAdHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);

    setTimeout(() => {
      (<AdComponent>componentRef.instance).data = adItem.data;
    }, 0);

  }

  getAds(): void {
    this.interval = window.setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
