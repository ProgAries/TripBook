import { Validators } from "@angular/forms";
import { from } from "rxjs";


export const EditInfo = {
  image: [null],
  name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
  nickName: [null, [Validators.minLength(3), Validators.maxLength(25)]],
  birthDate: [null,],
  gender: [0,],
  homeCountry: ["", [Validators.minLength(3), Validators.maxLength(50)]],
  biography: [null],
}


