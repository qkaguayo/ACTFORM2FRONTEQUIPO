import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  nt = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;

  Anuncio: string | null = "anuncio";
  nombre: string | null = null;
  fono: string | null = null;
  email: string | null = null;


  constructor() { }

  ngOnInit(): void {
  }

  insertar(): void {
    this.Anuncio = "";

    if (this.email != null && this.fono != null && this.nombre != null) {
      if (this.email.length != 0 || this.nombre.length != 0 || this.fono.length != 0) {
        this.Anuncio = "Campos vacios encontrados";
        if (this.email.search(" ") >= 0 || this.nombre.search(" ") >= 0 || this.fono.search(" ") >= 0) {
          console.log("Espacio en blanco encontrado");
          this.Anuncio = "Carácteres vacios encontrados";
        } else {
          if (this.re.test(this.email)) {
            console.log("mail correcto");
            if (this.nt.test(this.fono)) {
              console.log("numero correcto");
            } else {
              this.Anuncio = ("numero incorrecto");
            }

          } else {
            console.log("mail incorrecto");
            this.Anuncio = "Correo incorrecto";
          }
        }
      }
    } else {
      console.log("Espacio en blanco encontrado");
      this.Anuncio = "Campo Vacios";
    }
    console.log("metodo insertar");
    console.log(this.nombre + " " + this.fono + " " + this.email);
  }

}