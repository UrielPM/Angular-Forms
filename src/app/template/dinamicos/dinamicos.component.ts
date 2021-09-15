import { Component } from '@angular/core';

interface Persona{
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito{
  id: number;
  nombre: string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  nuevojuego: string = '';

  persona: Persona = {
    nombre: 'Uriel',
    favoritos: [
      { id: 1, nombre: 'Metal Gear'},
      { id: 2, nombre: 'DeathStranding'},
    ]
  }

  agregarjuego(){
    const nuevofavorito: Favorito = {
      id: this.persona.favoritos.length + 1, 
      nombre: this.nuevojuego
    }
    this.persona.favoritos.push({ ...nuevofavorito });
    this.nuevojuego = '';
  }

  eliminar( index: number){
    this.persona.favoritos.splice(index, 1);
  }

  guardar(){
    console.log('dinamicos');
    
  }
  

}
