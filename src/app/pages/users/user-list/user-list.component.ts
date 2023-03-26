import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/profile.model';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  user! : User;

  userList! : User[];


  constructor(
    private readonly _userservice : userService,
  ) { }

  ngOnInit(): void {
    this.getList()
  }

  getLoggedUser()
  {
    this._userservice.getLoggedUser().subscribe({
      next : (data : User) => {this.user = (data)
      console.log("user is here" +data)
      }
    })
  }

  getList(){
    this._userservice.getlist().subscribe({
      next : (data : User[]) => {this.userList = (data)
        console.log(data)
      }
    })
  }

  delete(user : User){
    this._userservice.delete(user.id)
    .subscribe({
      next : () => this.ngOnInit()
    });
  }

  showProfil(){
    this._userservice.navigateToHome()
  }

}
