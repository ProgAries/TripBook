import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { userService } from 'src/app/services/user.service';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { AddProfile } from 'src/app/forms/addProfile.form';
import { CountryService } from 'src/app/services/countries.service';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  fg! : FormGroup;
  imageChangedEvent: any = '';
  croppedImage: any = 'https://cdn-icons-png.flaticon.com/512/130/130111.png';
  date!: Date;

  selectedCountry!: string;
  countries!: any[];


  constructor(
    private readonly _fb: FormBuilder,
    private readonly _userservice: userService,
    private readonly _router: Router,
    private _countryService : CountryService,
    ) { }

    ngOnInit(): void {
      this.loadAddmodule();
      this.loadCoutries();
    }



done(){
  if(this.fg.invalid){
    return console.error("invalid form");
    ;
  }
  this._userservice.add(this.fg.value).subscribe({
    next: () => this._router.navigate(['/userlist'])
  })
}


  loadAddmodule(){
    this.fg = this._fb.group(AddProfile);
    this.fg.patchValue({
      birthDate: this.format("2000-01-01")
    })
  }

  format(birthDate: string | null): any {
    if(!birthDate)
      return null;
    return birthDate.split("T")[0];
  }


    fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
      let image = this.croppedImage.split(",")[1];
      this.fg.get("image")?.setValue(image);
      console.log(image)
  }

  loadCoutries() {
    this._countryService.getCountries().subscribe(coutries => {
      this.countries = coutries;
    })
  }

}



