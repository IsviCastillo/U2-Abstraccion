abstract class Transporte {
    distancia: number;
    constructor(distancia: number) {
        this.distancia = distancia;
    }
    abstract calcularCosto(): void;
}

class Taxi extends Transporte {
    calcularCosto(): void {
        const costo = this.distancia * 1.5;
        console.log("El costo del viaje en Taxi es: " + costo)
    }
}
class Autobus extends Transporte {
    calcularCosto(): void {
        const costo = this.distancia * 0.5;
        console.log("El costo del viaje en Autobús es: " + costo)
    }
}
class Uber extends Transporte {
    calcularCosto(): void {
        const costo = this.distancia * 1.0;
        console.log("El costo del viaje en Uber es: " + costo)
    }
}

const taxi = new Taxi(10);
taxi.calcularCosto();

const autobus = new Autobus(10);
autobus.calcularCosto();

const uber = new Uber(10);
uber.calcularCosto();