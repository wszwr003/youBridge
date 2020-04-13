import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  URL = "http://localhost:4000";

  constructor(private http: HttpClient) {}

  getHttp(URL: string) {
    return this.http.get(this.URL + URL);
  }
  postHttp(URL: string, object: Object) {
    //this.http.post(this.URL + URL, object).subscribe((res) => {});
    return this.http.post(this.URL + URL, object);
  }
}
