import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { User } from "./user";

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) {}

  login(user: User): boolean {
    if (user.username !== "" && user.password !== "") {
      if (user.username == "grandway" && user.password == "grandway") {
        this.loggedIn.next(true);
        this.router.navigate(["/sys"]);
        return true;
      }
    }
    return false;
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(["/login"]);
  }
}
