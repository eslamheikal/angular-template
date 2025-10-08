import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
<<<<<<< HEAD
import { InputLabel } from '../../../shared/components/input-label/input-label';
=======
>>>>>>> 936adaf186c79057ed2c6fc37805da59bab88197
import { Router, RouterLink } from '@angular/router';
import { ToastService } from '../../../shared/services/toast.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { AuthApiService } from '../../../../core/services/auth-api.service';
<<<<<<< HEAD
=======
import { InputLabel } from '../../../shared/components/input-label/input-label';
>>>>>>> 936adaf186c79057ed2c6fc37805da59bab88197

@Component({
  selector: 'app-forget-password',
  imports: [TranslateModule, InputLabel, ReactiveFormsModule, RouterLink],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.scss'
})
export class ForgetPassword {

  forgetForm!: FormGroup;

  private fb = inject(FormBuilder);
  private authService = inject(AuthApiService);
  private toastService = inject(ToastService);
  private loader = inject(LoaderService);
  private router = inject(Router);
  private translate = inject(TranslateService);

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.forgetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
    });
  }

  getFormControl(controlName: string) {
    return this.forgetForm.get(controlName) as FormControl;
  }

  login() {
    if (this.forgetForm.invalid) {
      this.forgetForm.markAllAsTouched();
      return;
    }

    this.loader.show();
    this.authService.forgotPassword(this.forgetForm.value.email).subscribe((result) => {
      if(result){
        this.toastService.showSuccess(this.translate.instant('auth.forgetPasswordSuccess'));
        this.router.navigate(['/auth/login']);
      }
    }, _ => {}, () => this.loader.hide());
  }

}
