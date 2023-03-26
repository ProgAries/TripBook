import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddCity } from 'src/app/forms/addCity.form';
import { GalleryAdd } from 'src/app/forms/addGallery.form';
import { AddVisitedCity } from 'src/app/forms/addVisitedCity.form';
import { Gallery, GalleryImage, User } from 'src/app/models/profile.model';
import { ToDatePipe } from 'src/app/pipes/to-date.pipe';
import { LoginService } from 'src/app/services/login.service';
import { userService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {

  user! : User
  gallery! : Gallery

  activeIndex: number = 1;
  age : number = 0;


  displayViewEdit: boolean = false;
  displayAddCity: boolean = false;
  displayAddVisCity: boolean = false;
  displayConfirm1: boolean = false;
  displayConfirm2: boolean = false;
  displayGalleryAdd: boolean = false;
  displayModalAddImage: boolean = false;
  displayModalViewGallery: boolean = false;
  displayInfo: boolean = false;

  galleryId: number = 0;
  selectedCity: number = 0;
  images! : GalleryImage[]

  fg!: FormGroup;
  fg2! : FormGroup;
  fgGallery!: FormGroup;

  constructor(
    private readonly _userservice : userService,
    private _fb : FormBuilder,
  ) { }


  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  ngOnInit(): void {
    this.getLoggedUser();
    this.displayViewEdit = false;
    this.loadAddCity();
    this.displayAddCity = false;
    this.loadAddVisitedCity();
    this.displayAddVisCity = false;
    this.loadAddGalleryForm();
  }


  doneCity(){
    if(this.fg.invalid){
      return console.error("invalid form");
      ;
    }
    this._userservice.addCityToVisit(this.fg.value).subscribe({
      next: () => {
        this.ngOnInit();
      }
    })
  }

  doneVCity(){
    if(this.fg2.invalid){
      return console.error("invalid form");
      ;
    }
    this._userservice.addVisitedCity(this.fg2.value).subscribe({
      next: () => {
        this.ngOnInit();
      }
    })
  }

  getLoggedUser()
  {
    this._userservice.getLoggedUser().subscribe({
      next : (data : User) => {this.user = (data)
      console.log("user is here" , data)
      }
    })
  }

  viewModalEdit(){
    this.displayViewEdit = !this.displayViewEdit
  }
  viewModalForAddCty(){
    this.displayAddCity = !this.displayAddCity
  }
  viewAddVCmodal(){
    this.displayAddVisCity = !this.displayAddVisCity
  }
  viewModalConfirm1(cityId : number){
    this.selectedCity = cityId;
    this.displayConfirm1 = !this.displayConfirm1;
  }
  viewModalConfirm2(cityId: number){
    this.selectedCity = cityId;
    this.displayConfirm2 = !this.displayConfirm2
  }
  viewModalAddGallery(cityId: number){
    this.selectedCity = cityId
    this.displayGalleryAdd = !this.displayGalleryAdd

  }

  viewModalAddImage(galleryId: number) {
    this.galleryId = galleryId;
    this.displayModalAddImage = !this.displayModalAddImage;
  }
  viewModalGalleryImg(galleryId: number) {
    this.galleryId = galleryId;
    this.displayModalViewGallery = true;
  }
  closeModalAddImage() {
    this.displayModalAddImage = false;
    this.displayModalViewGallery = true;
    this.getGallery(this.galleryId);
  }

  loadAddCity(){
    this.fg = this._fb.group(AddCity);
  }
  loadAddVisitedCity(){
    this.fg2 = this._fb.group(AddVisitedCity);
  }



  removeCity(){
    this._userservice.deleteCityToVisit(this.selectedCity).subscribe({
      next : () => this.ngOnInit()
    })
    this.displayConfirm1 = false
  }

  removeVCity(){
    this._userservice.deleteVisitedCity(this.selectedCity).subscribe({
      next : () => this.ngOnInit()
    })
    this.displayConfirm2 = false
  }

  loadAddGalleryForm(){
    this.fgGallery = this._fb.group(GalleryAdd)
  }

  addGallery(){

    if(this.fgGallery.invalid){
      return console.error("invalid form");
    }
    this._userservice.addGallery(this.selectedCity, this.fgGallery.value).subscribe({
      next : () => {
        this.displayGalleryAdd = false;
        this.ngOnInit();
      }
    })

  }
  // confirmAddGallery(){
  //   this.displayGalleryAdd = false;
  //   this.ngOnInit()
  // }

  getGallery(galleryId : number){
    this.viewModalGalleryImg(galleryId);
    this._userservice.getThisGallery(galleryId).subscribe({
      next : (data : Gallery) => {
        this.gallery = (data)
        this.images = this.gallery.galleryImages;
        console.log("this gallery", this.images)
      }
    })
  }

  deleteImg(id : number) {
    //const id = this.gallery.galleryImages[this.activeIndex].imageId;
    console.log(id);
    //appeler l'api
    this._userservice.deleteImg(id).subscribe({
      next : () => this.getGallery(this.galleryId)
    })
  }
}
