import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserAddComponent } from './pages/users/user-add/user-add.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageServerPipe } from './pipes/image-server.pipe';
import { UserLoginComponent } from './pages/users/user-login/user-login.component';
import { UserHomeComponent } from './pages/users/user-home/user-home.component';
import { AuthInterceptor } from './security/AuthInterceptor.security';
import { TopBannerComponent } from './banner/top-banner/top-banner.component';
import { UserProfilComponent } from './pages/users/user-profil/user-profil.component';
import { ToDatePipe } from './pipes/to-date.pipe';
import { UserEditComponent } from './pages/users/user-edit/user-edit.component';
import { DndDirective, UserAddGalleryComponent } from './pages/users/user-add-gallery/user-add-gallery.component';
import { CountriesSelectComponent } from './pages/countiries-select/countiries-select.component';






@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
    UserListComponent,
    UserAddComponent,
    UserLoginComponent,
    ImageServerPipe,
    TopBannerComponent,
    UserProfilComponent,
    ToDatePipe,
    UserEditComponent,
    UserAddGalleryComponent,
    DndDirective,
    CountriesSelectComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HammerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
