import { Validators } from "@angular/forms";


export const GalleryAdd = {
  title : [null, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]]
}
