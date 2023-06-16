export class Empresa {
    constructor(id, nombre, rut, importaciones) {
      this.id = id;
      this.nombre = nombre;
      this.rut = rut;
      this.rubro = rubro;
      this.tamaño = tamaño;
      this.importaciones = [];
    }
  
    //metodo agregar importacion
    agregarImportacion(importacion) {
      this.importaciones.push(importacion);
    }
  
 
  }