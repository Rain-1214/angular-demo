import { Injectable, OnInit } from '@angular/core';
import { AjaxReturn } from '../entity/AjaxReturn';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Grade } from '../entity/grade';
import { NzNotificationService } from 'ng-zorro-antd';
import { Student } from '../entity/student';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

interface StusAndCountNum {
    students: Student[];
    countNum: number;
}

@Injectable()
export class StudentService {

    gradeArray: Grade[];

    constructor(
        private http: HttpClient,
        private nzNotificationService: NzNotificationService,
    ) {
        this.getGradeAndClass();
    }

    getStudentByGidCid(gradeId: number, classId: number): Observable<Student[] | void> {
        return this.http.post('/api/student/getStuBygidcid', { gradeId, classId }).switchMap((res: AjaxReturn) => {
            return this.returnData(res);
        });
    }

    getStudent(page: number): Observable<StusAndCountNum | void> {
        return this.http.get('/api/student/getStudent', { params: { page: `${page}` } }).switchMap((res: AjaxReturn) => {
            return this.returnData(res);
        });
    }

    private async getGradeAndClass() {
        const res = await this.http.get<AjaxReturn>('/api/student/getGrade').toPromise();
        if (res.stateCode === 1) {
            this.gradeArray = res.data;
        }
    }

    private returnData(result: AjaxReturn) {
        if (result.stateCode === 1) {
            return Observable.of(result.data);
        } else {
            this.nzNotificationService.create('error', '有一个错误', result.message);
        }
    }

}
