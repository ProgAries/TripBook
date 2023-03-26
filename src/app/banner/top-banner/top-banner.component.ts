import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss']
})
export class TopBannerComponent implements OnInit {

  islogged : boolean = false;

  logoutConfirm : boolean = false;

  sidebarView: boolean =  false;

  constructor(
    private readonly _logService : LoginService,
    private readonly _router : Router
  ) { }

  ngOnInit(): void {
    this.verifyLog()
  }


  verifyLog(){
    if(localStorage.getItem("token") === null){
      this.islogged = false
    }
    if(localStorage.getItem("token") !== null){
      this.islogged = true
    }
  }

  logout(){
    this._logService.logout();
    this._router.navigate(['/home'])
  }

  viewLogoutMod(){
    this.logoutConfirm = !this.logoutConfirm
  }

  viewSidebar(){
    this.sidebarView = !this.sidebarView
  }
}
