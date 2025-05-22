let inventario = JSON.parse(localStorage.getItem("inventario")) || [];
let historial = JSON.parse(localStorage.getItem("historial")) || [];

function registrarEntrada() {
    let codigo = document.getElementById('codigo').value;
    let prendas = document.getElementById('prendas').value;
    let tallas = document.getElementById('tallas').value;
    let cantidadEntrada = parseInt(document.getElementById('cantidad_entrada').value);
    let precio = parseFloat(document.getElementById('precio').value);
    let stock = cantidadEntrada-cantidadSalida

    if (codigo === '' || prendas === '' || tallas === '' || cantidadEntrada <= 0 || precio <= 0) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }


    let productoExistente = inventario.find(item => item.codigo === codigo);

    if (productoExistente) {
        
        productoExistente.cantidad += cantidadEntrada;
    } else {
       
        inventario.push({codigo, prendas, tallas, cantidad: cantidadEntrada, precio});
    }

    
    localStorage.setItem("inventario", JSON.stringify(inventario));

  
    document.getElementById('codigo').value = '';
    document.getElementById('prendas').value = '';
    document.getElementById('tallas').value = '';
    document.getElementById('cantidad_entrada').value = '';
    document.getElementById('precio').value = '';

    
    mostrarInventario();
}


function actualizarEntrada() {
    let codigo = document.getElementById('codigo').value;
    let prendas = document.getElementById('prendas').value;
    let tallas = document.getElementById('tallas').value;
    let cantidadEntrada = parseInt(document.getElementById('cantidad_entrada').value);
    let precio = parseFloat(document.getElementById('precio').value);

    if (codigo === '' || prendas === '' || tallas === '' || cantidadEntrada === ''|| precio === '') {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }


    let productoExistente = inventario.find(item => item.codigo === codigo);

    if (productoExistente) {
        
        productoExistente.cantidad += cantidadEntrada;
        productoExistente.tallas = tallas;
        productoExistente.precio += precio;

    } else {
       
        inventario.push({codigo, prendas, tallas, cantidad: cantidadEntrada, precio});
    }

    
    localStorage.setItem("inventario", JSON.stringify(inventario));

  
    document.getElementById('codigo').value = '';
    document.getElementById('prendas').value = '';
    document.getElementById('tallas').value = '';
    document.getElementById('cantidad_entrada').value = '';
    document.getElementById('precio').value = '';

    
    mostrarInventario();
}
function registrarSalida() {
    let codigoSalida = document.getElementById('codigo_salida').value;
    let cantidadSalida = parseInt(document.getElementById('cantidad_salida').value);

    if (codigoSalida === '' || cantidadSalida <= 0) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }

    
    let producto = inventario.find(item => item.codigo === codigoSalida);

    if (!producto) {
        alert("Producto no encontrado en el inventario.");
        return;
    }

    
    if (producto.cantidad < cantidadSalida) {
        alert("No hay suficiente cantidad en el inventario para esta salida.");
        return;
    }

    
    producto.cantidad -= cantidadSalida;

    
    localStorage.setItem("inventario", JSON.stringify(inventario));

    
    let fecha = new Date().toLocaleString();
    historial.push({
        codigo: producto.codigo,
        prendas: producto.prendas,
        tallas: producto.tallas,
        cantidad: cantidadSalida,
        precio: producto.precio,
        fecha: fecha
    });

    
    localStorage.setItem("historial", JSON.stringify(historial));

    document.getElementById('codigo_salida').value = '';
    document.getElementById('cantidad_salida').value = '';

    mostrarInventario();
    mostrarHistorial();
}


function mostrarInventario() {
    const table = document.getElementById('inventario');
    
    let rows = table.rows.length;
    for (let i = rows - 1; i > 0; i--) {
        table.deleteRow(i);
    }

   
    inventario.forEach(item => {
        let row = table.insertRow();
        row.insertCell(0).textContent = item.codigo;
        row.insertCell(1).textContent = item.prendas;
        row.insertCell(2).textContent = item.tallas;
        row.insertCell(3).textContent = item.cantidad;
        row.insertCell(4).textContent = item.precio;
    });
}

function mostrarHistorial() {
    const table = document.getElementById('historial');

    let rows = table.rows.length;
    for (let i = rows - 1; i > 0; i--) {
        table.deleteRow(i);
    }

   
    historial.forEach(item => {
        let row = table.insertRow();
        row.insertCell(0).textContent = item.codigo;
        row.insertCell(1).textContent = item.prendas;
        row.insertCell(2).textContent = item.tallas;
        row.insertCell(3).textContent = item.cantidad;
        row.insertCell(4).textContent = item.precio;
        row.insertCell(5).textContent = item.fecha;
    });
}

window.onload = function() {
    mostrarInventario();
    mostrarHistorial();
};


    
