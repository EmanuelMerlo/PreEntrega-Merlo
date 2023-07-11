alert("Bienvenido al sitio web de eventos para cumpleaños")

let nombre = prompt("Por favor escriba su nombre");
let apellido = prompt("Escriba su apellido");

const nombreUsuario = nombre + " " + apellido;
console.log("Nombre de cliente: " + nombreUsuario);
alert("Bienvenido " + nombreUsuario)
alert("Obtendrá su presupuesto introduciendo los siguientes datos");


let busqueda = prompt("¿Qué buscas? ¿Cascada de chocolate, catering o mesa dulce?");
if (busqueda === "catering") {
    alert("El precio por persona es de $1300.")
    let numeroDePersonas = prompt("Introduzca la cantidad de personas")
    let precioPorPersona = 1300
    let presupuestoTotal = (numeroDePersonas * precioPorPersona)
    console.log("El presupuesto por el servicio de catering es de: $" + presupuestoTotal)
} else if (busqueda === "cascada de chocolate") {
    alert("El precio por persona es de $2700.")
    let precioPorPersona = 2700
    console.log("Precio por persona: " + precioPorPersona)
    let numeroDePersonas = prompt("Introduzca la cantidad de personas")
    console.log("La cantidad de personas es: " + numeroDePersonas)
    let presupuestoTotal = (numeroDePersonas * precioPorPersona)
    console.log("El presupuesto por el servicio de catering es de: $" + presupuestoTotal)
} else if (busqueda === "mesa dulce") {
    alert("El precio por persona es de $1650.")
    let precioPorPersona = 1650
    console.log("Precio por persona: " + precioPorPersona)
    let numeroDePersonas = prompt("Introduzca la cantidad de personas")
    console.log("La cantidad de personas es: " + numeroDePersonas)
    let presupuestoTotal = (numeroDePersonas * precioPorPersona)
    console.log("El presupuesto por el servicio de catering es de: $" + presupuestoTotal)
}