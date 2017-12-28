import { Component, OnInit, Optional } from '@angular/core';
import { Parent } from '../parent.service';

@Component({
    selector: 'app-children',
    templateUrl: './children.component.html',
})
export class ChildrenComponent implements OnInit {

    parentName: string;

    constructor(@Optional() public parent: Parent) { }

    ngOnInit() {
        this.parentName = this.parent.name;
    }
}
