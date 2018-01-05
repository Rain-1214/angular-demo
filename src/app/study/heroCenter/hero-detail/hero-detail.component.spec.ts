import { HeroDetailComponent } from './hero-detail.component';
import { async, TestBed, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { By } from '@angular/platform-browser';
import { Hero } from '../Hero';
import { Observable } from 'rxjs/Observable';
import { HeroService } from '../hero.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import 'rxjs/add/observable/of';
import { HttpClient, HttpHandler } from '@angular/common/http';

const heroServiceStub = {
  testHero: {
    id: 2,
    name: 'byId'
  },
  getHeroById(id: number): Observable<Hero> {
    return Observable.of(this.testHero);
  }
};

describe('HeroDetailComponent Test', () => {

  let fixture: ComponentFixture<HeroDetailComponent>;
  let comp: HeroDetailComponent;
  let h1el: DebugElement;
  let heroService: HeroService;
  let spy: jasmine.Spy;

  // async beforeEach
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      declarations: [ HeroDetailComponent ],
      providers: [
        {
          provide: HeroService,
          useValue: heroServiceStub
        }
      ]
    })
    .compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    comp    = fixture.componentInstance;
    h1el  = fixture.debugElement.query(By.css('h1')); // find the element

    heroService = TestBed.get(HeroService);

    spy = spyOn(heroService, 'getHeroById')
          .and.returnValue(Observable.of(new Hero(2, 'byId', 'Rich')));

    // pretend that it was wired to something that supplied a className
    fixture.detectChanges(); // trigger initial data binding
  });

  it('should still not show quote after component initialized', () => {
    spy.calls.any();
  });

  it('should has hero as {id:2,name:byId}', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(comp.hero.id).toEqual(heroServiceStub.testHero.id);
    expect(comp.hero.name).toEqual(heroServiceStub.testHero.name);
    // expect(comp.hero.id).toEqual(2);
  }));

  it('toBe Test', () => {
    const a = 1;
    const b = 2;
    expect(a).toBe(a, 'buyiyangde');
  });


});
