class Vehiculo {
    constructor(tipo) {
        this.tipo = tipo;
    }
}
class Carro extends Vehiculo {
    mover() {
        console.log("El carro avanza a 40 km/h");
    }
}
class Moto extends Vehiculo {
    mover() {
        console.log("La moto se desplaza a 20 km/h");
    }
}
const carrito = new Carro("Honda");
carrito.mover();
const motito = new Moto("Yamaha");
motito.mover();
export {};
//# sourceMappingURL=Ejercicio2.js.map