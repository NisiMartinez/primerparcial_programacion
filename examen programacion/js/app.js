function cargarArticulo() {
    let articulo = document.getElementById("articulo").value;
    let codigo = document.getElementById("codigo").value;
    let Precio= document.getElementById("Precio").value;
    let fecha = document.getElementById("Fecha").value;

    if (articulo === "" || codigo === "" || Precio === "" || fecha === "") {
        alert("Todos los campos son obligatorios");
        return;
    }

    let tabla = document.getElementById("Tienda");
    let fila = tabla.insertRow(-1);
    fila.insertCell(0).innerText = codigo;
    fila.insertCell(1).innerText = articulo;
    fila.insertCell(2).innerText = Precio;
    fila.insertCell(3).innerText = fecha;
}

function actualizarArticulo() {
    let codigo = document.getElementById("codigo").value;
    let tabla = document.getElementById("Tienda");
    let filas = tabla.rows;

    for (let i = 1; i < filas.length; i++) {
        if (filas[i].cells[0].innerText === codigo) {
            filas[i].cells[1].innerText = document.getElementById("articulo").value;
            filas[i].cells[2].innerText = document.getElementById("Precio").value;
            filas[i].cells[3].innerText = document.getElementById("Fecha").value;
            alert("Artículo actualizado correctamente");
            return;
        }
    }
    alert("Código no encontrado");
}

function eliminarArticulos() {
    let tabla = document.getElementById("Tienda");
    let filas = tabla.rows.length;
    for (let i = filas - 1; i > 0; i--) {
        tabla.deleteRow(i);
    }
    alert("Todos los artículos han sido eliminados");
}

function buscarArticulo() {
    let codigo = document.getElementById("codigo").value;
    let tabla = document.getElementById("Tienda");
    let filas = tabla.rows;

    for (let i = 1; i < filas.length; i++) {
        if (filas[i].cells[0].innerText === codigo) {
            alert(`Artículo encontrado: \nCódigo: ${filas[i].cells[0].innerText}\nNombre: ${filas[i].cells[1].innerText}\nPrecio: ${filas[i].cells[2].innerText}\nFecha: 
                ${filas[i].cells[3].innerText}`);
            return;
        }
    }
    alert("Código no encontrado");
}