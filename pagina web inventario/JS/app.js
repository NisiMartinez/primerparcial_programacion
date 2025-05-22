function calcular() {
    let total = 0;
    
    const items = [
        "001", "002", "003", "004", "005", "006", "007", "008", "009"
    ];

    items.forEach(item => {
        let quantity = document.getElementById(item).value;
        quantity = quantity ? parseInt(quantity) : 0; // If empty, assume 0
        total += quantity;
    });

    document.getElementById("promedio").value = total;
}

function limpiar() {

    const inputs = document.querySelectorAll("input[type='text'], input[type='number'], select");
    inputs.forEach(input => input.value = "");

    document.getElementById("promedio").value = "";
}

function nuevo() {

    const nombre = document.getElementById("nombre").value;
    const empleado = document.getElementById("empleado").value;
    const compra = document.getElementById("compra").value;


    let itemsData = {};
    const items = [
        { id: "001", name: "Arroz Entero (100 g)" },
        { id: "002", name: "Cafe Instantaneo" },
        { id: "003", name: "Jabon de Barra" },
        { id: "004", name: "Azucar" },
        { id: "005", name: "Carton de Huevos" },
        { id: "006", name: "Maseca Amarilla" },
        { id: "007", name: "Frijoles" },
        { id: "008", name: "Coditos" },
        { id: "009", name: "Zanahorias" },
    ];

    items.forEach(item => {
        let quantity = document.getElementById(item.id).value;
        if (quantity) {
            itemsData[item.name] = quantity;
        }
    });

    console.log("Registro Guardado:");
    console.log("Encargado de la entrega: ", nombre);
    console.log("Empleado que recibió: ", empleado);
    console.log("Número de Compra: ", compra);
    console.log("Detalles de los productos entregados:", itemsData);

    alert("Registro guardado exitosamente!");
}