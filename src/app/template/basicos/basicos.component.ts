import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

@ViewChild('miformulario') miformulario!: NgForm;

initForm = {
  producto: ' rtx 4080ti',
  precio: 10,
  existencia: 10
}

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean{
    return this.miformulario?.controls.producto?.invalid 
    && this.miformulario?.controls.producto?.touched
  }

  precioValido(): boolean{
    return this.miformulario?.controls.precio?.touched 
    && this.miformulario?.controls.precio?.value < 0;
  }

  guardar(){
    //console.log(this.miformulario.value);
    console.log('Posteo Correcto');

    this.miformulario.resetForm({
      precio: 0,
      existencia: 0
    });
    
    
  }
}
