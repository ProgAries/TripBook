import { Validators } from "@angular/forms";


export const AddVisitedCity = {
  name : [null, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
  experience : [null, [Validators.minLength(3), Validators.maxLength(255)]],
  recomandation : [null, [Validators.minLength(3), Validators.maxLength(255)]]
}
