import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HTTP_SERVICE_OPTIONS } from "../app.module";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  URL = HTTP_SERVICE_OPTIONS.URL;
  constructor(private http: HttpClient) {}

  getHttp(URL: string) {
    return this.http.get(this.URL + URL);
  }
  postHttp(URL: string, object: Object) {
    //this.http.post(this.URL + URL, object).subscribe((res) => {});
    return this.http.post(this.URL + URL, object);
  }
}
