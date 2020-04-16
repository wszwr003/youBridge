import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  URL_local = "http://127.0.0.1:4000";
  URL_ali = "http://116.62.151.59:4000";
  URL = this.URL_ali;
  constructor(private http: HttpClient) {}

  getHttp(URL: string) {
    return this.http.get(this.URL + URL);
  }
  postHttp(URL: string, object: Object) {
    //this.http.post(this.URL + URL, object).subscribe((res) => {});
    return this.http.post(this.URL + URL, object);
  }
}
