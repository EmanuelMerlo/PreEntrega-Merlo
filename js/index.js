const guardarEnLocal = (key, value) => {
    localStorage.setItem(key, value)
};

//USUARIO, NOMBRE, APELLIDO Y CANTIDAD DE PERSONAS
const inputNombre = document.querySelector("#inputNombre");
const inputApellido = document.querySelector("#inputApellido");
const inputPersonas = document.querySelector("#inputPersonas");
const carga = document.querySelector("#cargaDatos");
const mostrarTexto = document.querySelector("#divSeleccion");

carga.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarTexto.innerHTML =
        `<h3>${inputNombre.value} ${inputApellido.value}, por favor seleccione uno de los servicios para calcular el presupuesto para ${inputPersonas.value} personas</h3>`

    guardarEnLocal("cantidad de personas", inputPersonas.value)
})

// PRODUCTOS
class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productos = [
    new Producto(1, "Cascada de Chocolate", 9199),
    new Producto(2, "Catering", 5800),
    new Producto(3, "Mesa Dulce", 7899),
]


//SELECCION Y PRESUPUESTO
const presupuesto = (personas, precio) => personas * precio

const cascadaBoton = document.querySelector("#service_cascada_button");
const cateringBoton = document.querySelector("#service_catering_button");
const mesaDulceBoton = document.querySelector("#service_mesaDulce_button");
const mostrarTextoFinal = document.querySelector("#presupuestoFinal");

cascadaBoton.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedProduct = productos.find(producto => producto.nombre === "Cascada de Chocolate");
    const totalPresupuesto = presupuesto(inputPersonas.value, selectedProduct.precio);
    mostrarTextoFinal.innerHTML =
    `<h3>Total de presupuesto: ${totalPresupuesto}`
});

cateringBoton.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedProduct = productos.find(producto => producto.nombre === "Catering");
    const totalPresupuesto = presupuesto(inputPersonas.value, selectedProduct.precio);
    mostrarTextoFinal.innerHTML =
    `<h3>Total de presupuesto: ${totalPresupuesto}`
});

mesaDulceBoton.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedProduct = productos.find(producto => producto.nombre === "Mesa Dulce");
    const totalPresupuesto = presupuesto(inputPersonas.value, selectedProduct.precio);
    mostrarTextoFinal.innerHTML =
    `<h3>Total de presupuesto: ${totalPresupuesto}`
});