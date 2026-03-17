abstract class Vehiculo {
    tipo: string;

    constructor(tipo: string) {
        this.tipo = tipo;
    }

    abstract mover(): void;
}
class Carro extends Vehiculo {
    mover(): void {
        console.log("El carro avanza a 40 km/h");
    }
}

class Moto extends Vehiculo {
    mover(): void {
        console.log("La moto se desplaza a 20 km/h");
    }
}
const carrito = new Carro("Honda");
carrito.mover();

const motito = new Moto("Yamaha");
motito.mover();
