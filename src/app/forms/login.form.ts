import { Validators } from "@angular/forms";

export const LoginForm = {
  email: [null, [Validators.email, Validators.required]],
  password: [null, [Validators.required,]]
}
