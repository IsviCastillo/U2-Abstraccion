// // // Ejercicio 7 Sistema de Transporte
// // Crear una clase abstracta Transporte con el método calcularCosto(). El usuario
// // seleccionará entre Taxi, Autobús o Uber e ingresará la distancia recorrida para calcular el
// // costo del viaje.
class Transporte {
    constructor(distancia) {
        this.distancia = distancia;
    }
}
class Taxi extends Transporte {
    calcularCosto() {
        const costo = this.distancia * 1.5;
        console.log("El costo del viaje en Taxi es: " + costo);
    }
}
class Autobus extends Transporte {
    calcularCosto() {
        const costo = this.distancia * 0.5;
        console.log("El costo del viaje en Autobús es: " + costo);
    }
}
class Uber extends Transporte {
    calcularCosto() {
        const costo = this.distancia * 1.0;
        console.log("El costo del viaje en Uber es: " + costo);
    }
}
const taxi = new Taxi(10);
taxi.calcularCosto();
const autobus = new Autobus(10);
autobus.calcularCosto();
const uber = new Uber(10);
uber.calcularCosto();
export {};
//# sourceMappingURL=Ejercicio7.js.map