import { Component, OnInit, Optional } from '@angular/core';
import { HeroListComponent } from '../hero-list.component';

@Component({
    selector: 'app-children',
    templateUrl: './children.component.html'
})
export class ChildrenComponent implements OnInit {
    constructor(@Optional() public parent: HeroListComponent) { }

    ngOnInit() { }

    alert() {
        alert(this.parent.name);
    }
}
