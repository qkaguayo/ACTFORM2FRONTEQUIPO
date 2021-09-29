import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
  Anuncio: string|null = null;
  nombre  : string|null = null;
  apellido: string|null = null;
  email   : string|null = null;
  password: string|null = null;

  constructor() { }

  ngOnInit(): void {
  }

  insertar():void{
    let nombre1 = String(this.nombre);
    let apellido1 = String(this.apellido);
    let email1 = String(this.email);
    let password1 = String(this.password);

    if(nombre1.length == 0 || apellido1.length == 0 || email1.length == 0 || password1.length == 0){
      console.log("Espacio en blanco encontrado");
      this.Anuncio = "Campo Vacios";
    }

    if(nombre1.search(" ") >= 0 || apellido1.search(" ") >= 0 || email1.search(" ") >= 0 || password1.search(" ") >= 0 ){
      console.log("Espacio en blanco encontrado");
      this.Anuncio = "Carácteres vacios encontrados";
    }

    if(this.re.test(email1)){
      console.log("email correcto");
      }else{
        console.log("email incorrecto");
      }
    
    if(nombre1.length < 3 || apellido1.length <4) {
      console.log("campo muy corto encontrado");
      this.Anuncio = "Apellido/nombre muy corto";
    }

    console.log("metodo insertar1");
    console.log(this.nombre +" "+this.apellido+" "+this.email +" "+ this.password);
  }
}