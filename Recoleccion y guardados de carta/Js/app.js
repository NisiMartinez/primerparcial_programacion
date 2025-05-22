function agregarDatos(){
    //recolectar informacion 
    let nombre =prompt("Introduce tu Nombre");
    let edad =prompt("Ingrese tu edad");
  // apuntar a la tabla creada a traves de un id
  let tabla =document.getElementById('tablaPersonas');
  // crear una nueva fila (tr)
  //let fila=tabla.insertRow(-1);
  //let celda1=tabla.insertCell(0);
  //let celda2=tabla.insertCell(1);
 let fila=""
 //asignar texto a las tablas
 fila+=`
  <tr><td>${nombre}</td><td>${edad}</td></tr>`;
  tabla.innerHTML+=fila;
  
  
  
}