import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './pages/users/user-add/user-add.component';
import { UserHomeComponent } from './pages/users/user-home/user-home.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserLoginComponent } from './pages/users/user-login/user-login.component';
import { UserProfilComponent } from './pages/users/user-profil/user-profil.component';
import { UserAddGalleryComponent } from './pages/users/user-add-gallery/user-add-gallery.component';
import { CountriesSelectComponent } from './pages/countiries-select/countiries-select.component';

const routes: Routes = [
  {path : '', redirectTo: 'home', pathMatch: 'full'},
  {path : 'home', component : UserHomeComponent},
  {path : 'userlist', component : UserListComponent},
  {path : 'inscription', component : UserAddComponent},
  {path : 'login', component : UserLoginComponent},
  {path : 'profil', component : UserProfilComponent},
  {path : 'testselect', component : CountriesSelectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
