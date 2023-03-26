import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/forms/login.form';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  fg! : FormGroup;

  constructor(
    private _loginService : LoginService,
    private  _fb: FormBuilder,
    private readonly _router: Router,
  ) { }

  ngOnInit(): void {
    this.loadLoginModule()
  }

login(){
  if(this.fg.invalid){
    return console.error("invalid form");
    ;
  }
  this._loginService.login(this.fg.value).subscribe((authResult:any)=>{
    localStorage.setItem("token", authResult.token);
    this._router.navigate(['/profil'])
  })
  return console.log("You are logged, congratulations ;D")
}

isLogged(){
  return localStorage.getItem("token") !== null
}

loadLoginModule(){
  this.fg = this._fb.group(LoginForm);
}


}
