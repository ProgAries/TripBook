import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/profile.model';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  @Output()
  onSubmit: EventEmitter<boolean> = new EventEmitter<boolean>()



  constructor(
    private readonly _userservice : userService,
    private readonly _router : Router
    ) { }

  ngOnInit(): void {
  }

  navigateToLogin(){
    this._router.navigate(['login'])
  }
  navigateToRegistration(){
    this._router.navigate(['inscription'])
  }



}
