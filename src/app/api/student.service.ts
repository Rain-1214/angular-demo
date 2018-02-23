import { Injectable, OnInit } from '@angular/core';
import { AjaxReturn } from '../entity/AjaxReturn';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Grade } from '../entity/grade';
import { NzNotificationService } from 'ng-zorro-antd';
import { Student } from '../entity/student';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { ClassNum } from '../entity/class';

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

    getGradeAndClassByGidCid(gradeId: number, classId: number): Map<string, Grade | ClassNum> {
        const result = new Map<string, Grade | ClassNum>();
        this.gradeArray.forEach((e) => {
            if (e.id === gradeId) {
                result.set('grade', e);
                e.classes.forEach(item => {
                    if (item.id === classId) {
                        result.set('class', item);
                    }
                });
            }
        });
        return result;
    }

    updateStudent(student: Student): Observable<boolean | void> {
        return this.http.post('/api/student/updateStudent', student).switchMap((res: AjaxReturn) => {
            return this.returnData(res, true);
        });
    }

    addStudents(students: Student[]): Observable<boolean | void> {
        return this.http.put('/api/student/addStudent', { students }).switchMap((res: AjaxReturn) => {
            return this.returnData(res, true);
        });
    }

    private getGradeAndClass() {
        this.http.get<AjaxReturn>('/api/student/getGrade').subscribe(res => {
            if (res.stateCode === 1) {
                this.gradeArray = res.data;
            }
        });
    }

    private returnData(result: AjaxReturn, resultData?: any): Observable<any> {
        if (result.stateCode === 1) {
            return Observable.of(resultData || result.data);
        } else {
            this.nzNotificationService.create('error', '有一个错误', result.message);
            return Observable.of(null);
        }
    }

}
