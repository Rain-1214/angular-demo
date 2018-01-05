import { CrisisCenterComponent } from './crisis-center.component';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { CrisisService } from './crisis.service';
import { Observable } from 'rxjs/Observable';
import { Crisis } from './crisis';

const CrisisServiceStub = {
  getCrises(): Observable<Crisis[]> {
    return Observable.of([new Crisis(1, 'a')]);
  }
};

describe('Crisis Center Test', () => {

  let fixture: ComponentFixture<CrisisCenterComponent>;
  let comp: CrisisCenterComponent;

  // async beforeEach
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisisCenterComponent ],
      providers: [
        {
          provide: CrisisService,
          useValue: CrisisServiceStub,
        }
      ]
    })
    .compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisCenterComponent);
    comp    = fixture.componentInstance;
    // pretend that it was wired to something that supplied a className
    fixture.detectChanges(); // trigger initial data binding
  });

});
