import { Validators } from "@angular/forms";

export const AddProfile = {
  image: [null],
  name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
  nickName: [null, [Validators.minLength(3), Validators.maxLength(25)]],
  email: [null, [Validators.email]],
  password: [null, [Validators.required, Validators.minLength(8)]],
  birthDate: [null, [Validators.required]],
  gender: [0, [Validators.required]],
  homeCountry: ["", [Validators.minLength(3), Validators.maxLength(50)]],
  biography: [null],
}


