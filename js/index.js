//bienvenida al usuario

alert("Bienvenido al sitio web de eventos para cumpleaños");

let nombre = prompt("Por favor escriba su nombre");
let apellido = prompt("Escriba su apellido");

const nombreUsuario = nombre + " " + apellido;
console.log("Nombre de cliente: " + nombreUsuario);
alert("Bienvenido " + nombreUsuario)
alert("Obtendrá su presupuesto introduciendo los siguientes datos");

//funciones para realizar presupuesto

const resta = (presupuestoTotal, descuentoAlPresupuesto) => presupuestoTotal - descuentoAlPresupuesto;

function presupuestar() {
    let numeroDePersonas = parseInt(prompt("Introduzca la cantidad de personas"))
    if (numeroDePersonas == isNaN(Number)) {
        alert("¡No ingresaste un número válido!")
    } else {
        console.log("La cantidad de personas es: " + numeroDePersonas)
    }

    let presupuestoTotal = (numeroDePersonas * precioPorPersona);
    let descuentoAlPresupuesto = 8000

    if (presupuestoTotal >= 100000) {
        alert("El presupuesto ha superado los $100.000. Obtendras una bonificación gratuita de $8000")
        alert("Felicitaciones! El presupuesto fue realizado con éxito. Presione F12 y dirijase a la pestaña de consola para visualizarlo")
        console.log("El presupuesto sin descuento es de: $" + presupuestoTotal)
        console.log("El presupuesto final por el servicio es de: $" + resta(presupuestoTotal, 8000))
    } else {
        console.log("El presupuesto por el servicio es de: $" + presupuestoTotal)
        alert("Felicitaciones! El presupuesto fue realizado con éxito. Presione F12 y dirijase a la pestaña de consola para visualizarlo")
    }
}

//Declaraciones de variables para el switch

let precioPorPersona = 0;
let busqueda = prompt("¿Qué buscas? ¿Cascada de chocolate, catering o mesa dulce?");

switch (busqueda) {
    case "cascada de chocolate":
    case "CASCADA DE CHOCOLATE":
    case "Cascada de chocolate":
        console.log("Elgiste el servicio de cascada de chocolate.")
        alert("El precio por persona es de $2700.")
        precioPorPersona = 2700
        console.log("Precio por persona: $" + precioPorPersona)
        presupuestar()
        break;

    case "catering":
    case "CATERING":
    case "Catering":
        console.log("Elegiste el servicio de catering.")
        alert("El precio por persona es de $1300.")
        precioPorPersona = 1300
        console.log("Precio por persona: $" + precioPorPersona)
        presupuestar()
        break;

    case "mesa dulce":
    case "MESA DULCE":
    case "Mesa dulce":
        console.log("Elegiste el servicio de mesa dulce.")
        alert("El precio por persona es de $1650")
        precioPorPersona = 1650
        console.log("Precio por persona: $" + precioPorPersona)
        presupuestar()
        break;

    default:
        alert("¡No ingresaste un servicio disponible!")
        console.log("¡No contrataste un servicio disponible!")
        break;
}