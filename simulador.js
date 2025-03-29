// Lista de teclados disponibles
const teclados = [
    { id: 1, modelo: "Teclado Monsgeek1", precio: 80 },
    { id: 2, modelo: "Teclado Monsgeek2", precio: 100 },
    { id: 3, modelo: "Teclado Monsgeek3", precio: 50 },
    { id: 4, modelo: "Teclado Monsgeek4", precio: 120 },
];

// Función para mostrar los teclados disponibles
function mostrarTeclados() {
    console.log("Teclados disponibles:");
    teclados.forEach(teclado => {
        console.log(`${teclado.id}. ${teclado.modelo} - $${teclado.precio}`);
    });
}

// Función para calcular el costo total
function calcularTotal(idTeclado, cantidad) {
    const teclado = teclados.find(teclado => teclado.id === idTeclado);
    if (!teclado) {
        alert("ID de teclado no válido.");
        return null;
    }

    const total = teclado.precio * cantidad;
    const descuento = total > 200 ? 0.1 * total : 0; // 10% de descuento si supera $200
    const totalConDescuento = total - descuento;

    alert(`Modelo seleccionado: ${teclado.modelo}\nCantidad: ${cantidad}\nTotal: $${total}\nDescuento: $${descuento}\nTotal final: $${totalConDescuento}`);
    return totalConDescuento;
}

// Función principal del simulador
function iniciarSimulador() {
    mostrarTeclados();

    const idTeclado = parseInt(prompt("Ingresa el ID del teclado que deseas comprar:"));
    const cantidad = parseInt(prompt("Ingresa la cantidad que deseas comprar:"));

    if (isNaN(idTeclado) || isNaN(cantidad) || cantidad <= 0) {
        alert("Entrada inválida. Por favor, ingresa valores numéricos válidos.");
        return;
    }

    calcularTotal(idTeclado, cantidad);
}

// Ejecutar el simulador
iniciarSimulador();
