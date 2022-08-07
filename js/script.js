const SERVICIOS = [
    {
        id: "1",
        nombre: "Paseo individual",
        precio: 600,
    },
    {
        id: "2",
        nombre: "Paseo en grupo",
        precio: 500,
    }
]

// variables
const carrito = [];

// clases y funciones
class Servicio {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    obtenerInfo() {
        return `ID ${this.id} ${this.nombre} $${this.precio}`
    }
    aviso() {
        return `${this.nombre} valor de $${this.precio}`
    }
}

const obtenerInfoServicios = (serviciosArray) => {
    return serviciosArray.map((elemento) => elemento.obtenerInfo()).join("\n");
}
const agregarAlCarritoById = (servicios) => {
    const infoServicios = obtenerInfoServicios(servicios);
    const id = prompt("Ingrese el ID del servicio que desea contratar \n" + infoServicios);
    const servicio = servicios.find((servicio) => servicio.id === id);
    if (!servicio) return;
    carrito.push(servicio);
    alert("Servicio agregado correctamente");
}

const imprimirCarrito = (carritoDeServicios) => {
    carritoDeServicios.forEach((servicio) => {
        console.log(servicio.aviso());
    });
}
const obtenerTotal = (serviciosArray) => {
    let descuento = 300;
    let total = 0;
    let cantidad = prompt("Eliga la cantidad de paseos que desea contratar");
    if (cantidad > 3) {
        serviciosArray.forEach((servicio) => {
            total += servicio.precio * cantidad - descuento;
        });
    }
    else {
        serviciosArray.forEach((servicio) => {
            total += servicio.precio * cantidad;
        });
    }
    return total;
}

// start
const servicios = SERVICIOS.map(servicio => new Servicio(
    servicio.id,
    servicio.nombre,
    servicio.precio,
));

agregarAlCarritoById(servicios);
imprimirCarrito(carrito);
console.log("TOTAL: $", obtenerTotal(carrito));
alert("Abre la consola para ver el presupuesto");

