import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  codigo: string = "";
  nombre: string = "";
  precio: number = 0;
  stock: number = 0;
  idArray: number = 0;


  arrayCodigo : string[] = [];
  arrayNombre : string[] = [];
  arrayPrecio : number[] = [];
  arrayStock  : number[] = [];
  arrayIds: number[] = [];



  constructor() { 


  }

  ngOnInit(): void {


  }

  subidaValores(): void{
    
    console.log("Carga");
    this.arrayIds.push(this.idArray);
    this.arrayCodigo.push(this.codigo);
    this.arrayNombre.push(this.nombre);
    this.arrayPrecio.push(this.precio);
    this.arrayStock.push(this.stock);

    this.idArray++;

  }
  eliminarDeTabla(id: number|any,): void {

    let index = this.arrayCodigo.indexOf(id);
    this.arrayCodigo.splice(index, 1);

    index = this.arrayNombre.indexOf(id);
    this.arrayNombre.splice(index, 1);

    index = this.arrayPrecio.indexOf(id);
    this.arrayPrecio.splice(index, 1);

    index = this.arrayStock.indexOf(id);
    this.arrayStock.splice(index, 1);

    index = this.arrayIds.indexOf(id);
    this.arrayIds.splice(index, 1);
  }
}
