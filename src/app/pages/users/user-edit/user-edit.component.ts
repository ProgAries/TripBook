import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { EditInfo } from 'src/app/forms/editInfo.form';
import { userService } from 'src/app/services/user.service';
import { CountryService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  @Output()
  onSubmit: EventEmitter<boolean> = new EventEmitter<boolean>()

  fg! : FormGroup

  imageChangedEvent: any = '';
  croppedImage: any = 'https://cdn-icons-png.flaticon.com/512/130/130111.png';
  date!: Date;

  selectedCountry!: string;
  countries!: any[];

  constructor(
    private readonly _service : userService,
    private _fb : FormBuilder,
    private readonly _router : Router,
    private _countryService : CountryService,
  ) { }

  ngOnInit(): void {
    this.loadEditInfo()
    this.loadCoutries()
  }

  done(){
    if(this.fg.invalid){
      return console.error("invalid form");
      ;
    }
    this._service.editInfo(this.fg.value).subscribe({
      next: () => {
        this.onSubmit.emit(true);
      }
    })
  }


  loadEditInfo(){
    this.fg = this._fb.group(EditInfo);
    this._service.getLoggedUser().subscribe(user => {
      this.fg.patchValue({
        ...user,
        birthDate: this.format(user.birthDate)
      })
      this.croppedImage = 'https://localhost:7104/Images/'+ user.photoUrl;
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
