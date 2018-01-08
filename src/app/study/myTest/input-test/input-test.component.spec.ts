/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InputTestComponent } from './input-test.component';
import { Router } from '@angular/router';

const routerStub = {
  navigate(url) { return url; }
};

describe('InputTestComponent', () => {
  let component: InputTestComponent;
  let fixture: ComponentFixture<InputTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTestComponent ],
      providers: [
        {
          provide: Router,
          useValue: routerStub
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTestComponent);
    component = fixture.componentInstance;
    component.inputMessage = 'ace';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display ace', () => {
    const el = fixture.debugElement.query(By.css('p'));
    expect(el.nativeElement.textContent.trim()).toBe('Input Message: ace');
  });

  it('should send mvp', () => {
    let mvp: string;
    component.outputEvent.subscribe(res => mvp = res);
    const el = fixture.debugElement.query(By.css('.emit'));
    el.triggerEventHandler('click', null);
    expect(mvp).toBe('mvp');
  });
  it('should tell Router to navigate when hero clicked', inject([Router], (router: Router) => {
      const spy = spyOn(router, 'navigate');
      const el = fixture.debugElement.query(By.css('.goToHero'));
      el.triggerEventHandler('click', { button: 0 });
      console.log(spy.calls.first());
      const navArgs = spy.calls.first().args[0];
      expect(navArgs[0]).toBe('/heroCenter');
    })
  );
});
