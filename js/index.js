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

    if ((inputNombre.value === "") || (inputApellido.value === "") || (inputPersonas.value === "") || (inputPersonas.value == 0)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Aún te faltan completar campos!',
        })
    } else {
        mostrarTexto.innerHTML =
            `<h3>${inputNombre.value} ${inputApellido.value}, por favor seleccione uno de los servicios para calcular el presupuesto para ${inputPersonas.value} personas</h3>`
        guardarEnLocal("cantidad de personas", inputPersonas.value)
    }
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

const presupuesto = (personas, precio) => personas * precio;

const descuento = (res) => {
    return new Promise((resolve, reject) => {
        if (res > 150000) {
            resolve({
                icon: 'success',
                title: 'Superaste los $150.000',
                text: 'Obtuviste una bonificación',
            });
        } else {
            reject({
                icon: 'info',
                title: 'Si pasas los $150.000',
                text: 'Obtendrás una bonificación',
            });
        }
    });
};

const mostrarTextoFinal = document.querySelector("#presupuestoFinal");

const clickear = (productoNombre) => {
    Toastify({
        text: "Calculando presupuesto",
        duration: 3000,
        className: "calculo-icon",
        style: {
            background: "linear-gradient(to right, #19323C, #8c5e58)",
        },
    }).showToast();

    setTimeout(() => {
        const selectedProduct = productos.find((producto) => producto.nombre === productoNombre);
        const totalPresupuesto = presupuesto(inputPersonas.value,selectedProduct.precio);
        mostrarTextoFinal.innerHTML = `<h3>Total de presupuesto: $${totalPresupuesto}</h3>`;
        guardarEnLocal("Precio", totalPresupuesto);

        const precioFinal = localStorage.getItem("Precio");
        descuento(precioFinal)
            .then((resolve) => {
                Swal.fire(resolve);
            })
            .catch((error) => {
                Swal.fire(error);
            });
    }, 3000);
};

const cascadaBoton = document.querySelector("#service_cascada_button");
const cateringBoton = document.querySelector("#service_catering_button");
const mesaDulceBoton = document.querySelector("#service_mesaDulce_button");

cascadaBoton.addEventListener("click", (e) => {
    e.preventDefault();
    clickear("Cascada de Chocolate");
});

cateringBoton.addEventListener("click", (e) => {
    e.preventDefault();
    clickear("Catering");
});

mesaDulceBoton.addEventListener("click", (e) => {
    e.preventDefault();
    clickear("Mesa Dulce");
});
