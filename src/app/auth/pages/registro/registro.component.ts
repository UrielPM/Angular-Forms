import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { nombreApellidoPattern, emailPattern, usernameNovalido } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

miformulario: FormGroup = this.fb.group({
  nombre: ['', [Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern)]],
  email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.EmailValidator]],
  username: ['', [Validators.required, this.validatorService.usernameNovalido]],
  password: ['', [Validators.required, Validators.minLength(6) ]],
  password2: ['', [Validators.required ]],
}, {
    validators: [ this.validatorService.camposiguales('password','password2')]
});
 

 get emailErrorMsg(): string{
   const errors = this.miformulario.get('email')?.errors;
   if(errors?.required ){
     return 'Email Obligatorio';
   } 
   else if( errors?.pattern )
   {
    return 'El valor ingresado no tiene formato de correo'
   }
    else if( errors?.emailTomado )
    {
     return 'El correo electrónico ya fue tomado'
  }
   return ''

 }
  constructor(private fb: FormBuilder, 
             private validatorService: ValidatorService, 
             private EmailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miformulario.reset({
      nombre: 'Uriel Mora',
      email: 'test1@test.com',
      username: 'uriel_mora',
      password: '123456',
      password2: '123456'


    })
  }

  campoNoValido( campo: string){
    return this.miformulario.get(campo)?.invalid
        && this.miformulario.get(campo)?.touched;
}
/*
emailRequerido (){
  return this.miformulario.get('email')?.errors?.required
  && this.miformulario.get('email')?.touched;
}

emailFormato (){
  return this.miformulario.get('email')?.errors?.pattern
  && this.miformulario.get('email')?.touched;
}

emailTomado (){
  return this.miformulario.get('email')?.errors?.emailTomado
  && this.miformulario.get('email')?.touched;
}*/
  submitFormulario(){
    console.log(this.miformulario.value);
    this.miformulario.markAllAsTouched(); 
    
  }

}
