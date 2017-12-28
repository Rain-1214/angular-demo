import { Component, OnInit, forwardRef } from '@angular/core';
import { Parent } from './parent.service';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    providers: [
        {
            provide: Parent,
            useExisting: forwardRef(() => ParentComponent)
        }
    ]
})
export class ParentComponent implements OnInit, Parent {
    name = 'Tom';
    constructor() { }

    ngOnInit() { }
}
