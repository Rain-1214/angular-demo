import { Injectable } from '@angular/core';
import { AjaxReturn } from '../entity/AjaxReturn';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Grade } from '../entity/grade';
import { NzNotificationService } from 'ng-zorro-antd';

@Injectable()
export class StudentService {

    gradeArray: Grade[];

    constructor(
        private http: HttpClient,
    ) { }

    getGradeAndClass(): Observable<AjaxReturn> {
        return this.http.get<AjaxReturn>('/api/student/getGrade');
    }

    getStudentByGidCid(gradeId: number, classId: number): Observable<AjaxReturn> {
        return this.http.post<AjaxReturn>('/api/student/getStuBygidcid', { gradeId, classId });
    }

    getStudent(page: number): Observable<AjaxReturn> {
        return this.http.get<AjaxReturn>('/api/student/getStudent', { params: { page: `${page}` } });
    }

}
