class Empleado {
    constructor(nombre, horasTrabajadas, salarioBase) {
        this.nombre = nombre;
        this.horasTrabajadas = horasTrabajadas;
        this.salarioBase = salarioBase;
    }
}
class EmpleadoPorHoras extends Empleado {
    calcularSalario() {
        const salario = this.horasTrabajadas * this.salarioBase;
        console.log("El salario del empleado por horas " + this.nombre + " es: " + salario);
    }
}
class EmpleadoFijo extends Empleado {
    constructor(nombre, horasTrabajadas, salarioBase) {
        super(nombre, horasTrabajadas, salarioBase);
    }
    calcularSalario() {
        console.log("El salario del empleado fijo " + this.nombre + " es: " + this.salarioBase);
    }
}
const empleadoHoras = new EmpleadoPorHoras("Elvis", 40, 15);
empleadoHoras.calcularSalario();
const empleadoFijo = new EmpleadoFijo("Dania", 0, 2000);
empleadoFijo.calcularSalario();
export {};
//# sourceMappingURL=Ejercicio4.js.map