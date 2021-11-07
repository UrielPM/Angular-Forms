import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  miformulario: FormGroup= this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array( [
      ['Metal Gears', Validators.required],
      ['Death Stranding', Validators.required ]
    ], Validators.required)
  });


    nuevoFavorito: FormControl = this.fb.control('', Validators.required);
  get favoritosArr(){
    return this.miformulario.get('favoritos') as FormArray;
  }
  constructor( private fb: FormBuilder) { }

  campoEsValido( campo: string ){

    return this.miformulario.controls[campo].errors  
        && this.miformulario.controls[campo].touched;
  }

  agregarFavorito(){
    if( this.nuevoFavorito.invalid) {return;}
    //this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));

    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  guardar(){
    if(this.miformulario.invalid){
      this.miformulario.markAllAsTouched();
      return;
    }
     console.log(this.miformulario.value );
     
  }

  borrar(i: number){
    this.favoritosArr.removeAt(i); 

  }
}
