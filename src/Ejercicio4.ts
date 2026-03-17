abstract class Empleado {
    nombre: string;
    horasTrabajadas: number;
    salarioBase: number;

    constructor(nombre: string, horasTrabajadas: number, salarioBase: number) {
        this.nombre = nombre;
        this.horasTrabajadas = horasTrabajadas;
        this.salarioBase = salarioBase;
    }
    abstract calcularSalario(): void;
}

class EmpleadoPorHoras extends Empleado {
    calcularSalario(): void {
        const salario = this.horasTrabajadas * this.salarioBase;
        console.log("El salario del empleado por horas " + this.nombre + " es: " + salario);

    }
}
class EmpleadoFijo extends Empleado {
    constructor(nombre: string, horasTrabajadas: number, salarioBase: number) {
        super(nombre, horasTrabajadas, salarioBase);
    }
    calcularSalario(): void {
        console.log("El salario del empleado fijo " + this.nombre + " es: " + this.salarioBase);
    }
}    

const empleadoHoras = new EmpleadoPorHoras("Elvis", 40, 15);
empleadoHoras.calcularSalario();
const empleadoFijo = new EmpleadoFijo("Dania", 0, 2000);
empleadoFijo.calcularSalario();