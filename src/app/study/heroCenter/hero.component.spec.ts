import { HeroComponent } from './hero.component';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeroComponent test', () => {

    let fixture: ComponentFixture<HeroComponent>;
    let comp: HeroComponent;
    let headerEl: DebugElement;

    // async beforeEach
    beforeEach( async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                BrowserAnimationsModule
            ],
            declarations: [ HeroComponent ],
        })
        .compileComponents(); // compile template and css
    }));


    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(HeroComponent);
        comp    = fixture.componentInstance;
        headerEl  = fixture.debugElement.query(By.css('.header')); // find the element

        // pretend that it was wired to something that supplied a className
        fixture.detectChanges(); // trigger initial data binding
    });

    it('should has five li', () => {
        const liEl = headerEl.queryAll(By.css('li'));
        expect(liEl.length).toEqual(5);
    });

});
