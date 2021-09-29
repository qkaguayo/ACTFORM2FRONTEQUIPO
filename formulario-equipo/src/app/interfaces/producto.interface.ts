export interface Producto {
    id?: number;
    nombre?: string;
    descripcion?: string;
    peso_Carne?: number;
    precio?: number;

}


export interface ListaProductos {
    productos?: Producto[];
}
