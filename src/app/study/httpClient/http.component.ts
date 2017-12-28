import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

interface ResultItem {
    result: string[];
}

@Component({
    selector: 'app-http',
    templateUrl: './http.component.html',
})
export class HttpComponent implements OnInit {
    constructor(
        private http: HttpClient
    ) { }

    ngOnInit() {
        this.http.get<ResultItem>('/user/index.do').subscribe(data => {
            console.log(data);
        });
    }
}
