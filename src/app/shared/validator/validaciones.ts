import { FormControl } from '@angular/forms';


  export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'; 
  //Validar el correo
  export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

 export const usernameNovalido = ( control: FormControl) => {
    const valor: string = control.value?.trim().toLowerCase();
    if( valor === 'moradev'){
      return {
        nomoradev: true
      }
    }
    return null;
  
      
  }