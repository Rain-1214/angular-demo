import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightLight]',
})
export class HightLightDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('appHightLight') hightLightColor: string;

  @Input() defaultColor: string;

  constructor(
    private el: ElementRef
  ) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.hightLightBackground(this.hightLightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.hightLightBackground(null);
  }


  private hightLightBackground(color: string) {
    this.el.nativeElement.style.background = color;
  }

}
