import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

 // miformulario: FormGroup = new FormGroup({
   // nombre: new FormControl('RTX 4080ti'),
    //precio: new FormControl(1500),
    //existencias: new FormControl(10),
  //})
  miformulario: FormGroup = this.fb.group({
    nombre: [, [ Validators.required, Validators.minLength(3) ]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [,  [Validators.required, Validators.min(0)]],

  })
  constructor( private fb: FormBuilder) { }
ngOnInit(){
  this.miformulario.reset({
    nombre: 'rtx4080ti',
    precio: 2500,
   
  })
}
 campoEsValido( campo: string ){

   return this.miformulario.controls[campo].errors 
       && this.miformulario.controls[campo].touched;
 }
guardar(){
  if(this.miformulario.invalid){
    this.miformulario.markAllAsTouched();
    return;
  }
  console.log(this.miformulario.value);
  this.miformulario.reset();
  
}
}
