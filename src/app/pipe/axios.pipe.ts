import { Pipe, PipeTransform } from '@angular/core';
import { Http } from '@angular/http';

@Pipe({
  name: 'axios',
  pure: false
})
export class AxiosPipe implements PipeTransform {

  private url: string;
  private data: string;
  private called = 0;

  constructor(
    private http: Http,
  ) {}

  transform(url: string): any {
    if (url !== this.url) {
      this.called ++;
      console.log(this.called);
      this.data = null;
      this.url = url;
      this.http.get(url)
        .map(res => res.json())
        .subscribe(res => this.data = res);
    }
    return this.data;
  }
}
