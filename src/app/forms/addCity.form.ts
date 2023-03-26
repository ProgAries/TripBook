import { Validators } from "@angular/forms";


export const AddCity = {
  cityName : [null, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
  comment : [null]
}
