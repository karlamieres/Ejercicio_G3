import {Empresa} from '/src/clases/Empresa.js';
import {Importacion} from '/src/clases/Importacion.js';

let empresas = {}; //aqui almaceno el array
let idEmpresa = 0;
// let total = obtenerTotal();

document.addEventListener('DOMContentLoaded', function() {
document.getElementById('empresa-form').addEventListener('submit', function(event){ 
  event.preventDefault();

  let id = document.getElementById('empresa-id').value;
  let nombre = document.getElementById('empresa-nombre').value;
  let rut = document.getElementById('empresa-rut').value;

  let empresa = new Empresa(id, nombre, rut);
  empresas[id] = empresa;
    console.log(empresas[id].id);
    idEmpresa = empresas[id].id;  
  // document.getElementById('empresa-form').reset();

});
});

let importaciones = {}; //

document.getElementById('importacion-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let id = document.getElementById('importacion-id').value;
    let producto = document.getElementById('importacion-producto').value;
    let numero = document.getElementById('importacion-numero').value;
    let precio = document.getElementById('importacion-precio').value;
    console.log(id, producto, numero, precio);
    let importacion = new Importacion(id, producto, numero, precio);

    console.log(importacion);

    //document.addEventListener('DOMContentLoaded', function() {

    if (idEmpresa in empresas) {
      empresas[idEmpresa].agregarImportacion(importacion);

      updateTable(empresas[idEmpresa]);
      let sumaTotal = obtenerSumaTotalImportaciones();
      let numeroTotal = obtenerNumeroTotalImportaciones();
      console.log('suma total de importaciones: ', sumaTotal);
    } else {
      alert("Empresa no encontrada. Asegúrese de haberla agregado antes de registrar una importación.");
    }
 
    document.getElementById('importacion-form').reset();
  });

  function obtenerNumeroTotalImportaciones() {
    let numeroTotal = 0;
    for (let id in empresas) {
      for (let importacion of empresas[id].importaciones) {
        numeroTotal += parseInt(importacion.numero, 10);
      }
    }
    return numeroTotal;
  }
 
  function updateTable(empresa) {
    let table = document.getElementById('importaciones-table');
    
   /*  borra todas las filas existentes, excepto la fila de encabezado */
    while(table.rows.length > 1) {
      table.deleteRow(1);
    }
  }
    // Ahora, agrega una nueva fila por cada importación

    for(let importacion of empresa.importaciones) {
      let row = table.insertRow();
      
      let idCell = row.insertCell();
      idCell.textContent = importacion.id;
      
      let productoCell = row.insertCell();
      productoCell.textContent = importacion.producto;
      
      let numeroCell = row.insertCell();
      numeroCell.textContent = importacion.numero;
      
      let precioCell = row.insertCell();
      precioCell.textContent = importacion.precioUnitario;
      
      let totalCell = row.insertCell();
      totalCell.textContent = importacion.obtenerTotal();
  
    }
    //document.getElementById('total-importaciones').textContent = totalImportaciones;
    document.getElementById('total-importaciones').textContent = `El total de las importaciones es de ${obtenerSumaTotalImportaciones()}`;  
    document.getElementById('numero-importaciones').textContent = `El numero de las importaciones es de ${obtenerNumeroTotalImportaciones()}`;  
    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')
    myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus();
    });

    function filtroVisación(producto) {
          const productosVisados = ['Armas de fuego, municiones, explosivos y sustancias químicas, inflamables y asfixiantes', 'Material escrito o audiovisual relativo a las artes marciales destinado a la enseñanza, sin limitación alguna, cualquiera que sea la persona, establecimiento o entidad que efectúe la operación.', 'Alcoholes, bebidas alcohólicas y vinagres'];
      return productosVisados.includes(producto);
    }

    
    function filtroProhibición(producto) {
      const productosProhibidos = ['vehículos y motocicletas usadas', 'asbesto en cualquiera de sus formas', 'pornografía','desechos industriales tóxicos'];
      return productosProhibidos.includes(producto);
    }
    
    const dashboardContainer = document.getElementById('dashboard');
 
    function generarResumenEmpresa(empresa) {
      // Crea los elementos HTML y asigna los valores de la empresa
      const nombreElement = document.createElement('h2');
      nombreElement.textContent = empresa.nombre;
    
      const rutElement = document.createElement('p');
      rutElement.textContent = `RUT: ${empresa.rut}`;
    
      // Agrega los elementos al contenedor del dashboard
      dashboardContainer.appendChild(nombreElement);
      dashboardContainer.appendChild(rutElement);
    }
    
    document.getElementById('formularioFiltrado').addEventListener('submit', function (event) {
      event.preventDefault(); // Evitar que se envíe el formulario
    
      // Obtener los valores de los inputs
      const producto = document.getElementById('producto').value;
      const cantidad = parseInt(document.getElementById('cantidad').value);
      const precio = parseFloat(document.getElementById('precio').value);
    
      // Mostrar mensaje de advertencia según el filtro
      if (filtroVisación(producto)) {
        alert('Este producto requiere visación para su importación.');
      } else if (filtroProhibición(producto)) {
        alert('Este producto está prohibido para su importación.');
      } else {
        // Realizar el proceso de agregar importación si no hay restricciones
        agregarImportacion(producto, cantidad, precio);
        alert('Importación agregada correctamente.');
      }
      // Obtén una referencia al lienzo del gráfico
const ctx = document.getElementById('myChart').getContext('2d');

// Crea una instancia del gráfico de barras
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [{
      label: 'Ventas',
      data: [12, 19, 8, 15, 10],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

    });
   
  

