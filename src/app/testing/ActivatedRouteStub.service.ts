import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ParamMap, convertToParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ActivatedRouteStubService {

    private _testParamMap: ParamMap;
    paramMap = new Subject();

    constructor() {
        this.paramMap.next(this._testParamMap);
    }

    get testParamMap() {
        return this._testParamMap;
    }
    set testParamMap(params: {}) {
        this._testParamMap = convertToParamMap(params);
        this.paramMap.next(this._testParamMap);
    }


    get snapshot() {
        return { paramMap: this.testParamMap };
    }
}
