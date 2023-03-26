import { HttpClient } from "@angular/common/http";
import { Token } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  url : string = "https://localhost:7104/api/Auth"

  constructor(
    private client : HttpClient
  ) {}

  login(loginInfo : any) : Observable<any> {
    return this.client.post<any>(this.url, loginInfo)
  }

  logout(){
    localStorage.removeItem("token");
  }
}
