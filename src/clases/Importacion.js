export class Importacion {
    constructor(id, producto, numero, precioUnitario) {
      this.id = id;
      this.producto = producto;
      this.numero = numero;
      this.precioUnitario = precioUnitario;
    }
     //metodo obtener total de importaciones
     obtenerTotalImportaciones() {
      let total = 0;
      for(let importacion of this.importaciones) {
        total += importacion.obtenerTotal();
      }
      return total;
    }
    obtenerTotal() {
      return this.numero * this.precioUnitario;
    }
  }