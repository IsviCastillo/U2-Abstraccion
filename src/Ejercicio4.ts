abstract class Empleado {
    nombre: string;
    horasTrabajadas: number;
    salarioBase: number;
    ventasRealizadas: number;

    constructor(nombre: string, horasTrabajadas: number, salarioBase: number ,ventasRealizadas: number = 0) {
        this.nombre = nombre;
        this.horasTrabajadas = horasTrabajadas;
        this.salarioBase = salarioBase;
        this.ventasRealizadas = ventasRealizadas;
    }
    abstract calcularSalario(): void;
}

class EmpleadoPorHoras extends Empleado {
    constructor(nombre: string, horasTrabajadas: number, salarioBase: number) {
        super(nombre, horasTrabajadas, salarioBase);
    }
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
class EmpleadoComision extends Empleado {
    ventasRealizadas: number;
    constructor(nombre: string, horasTrabajadas: number, salarioBase: number, ventasRealizadas: number) {
        super(nombre, horasTrabajadas, salarioBase);
        this.ventasRealizadas = ventasRealizadas;
    }
    calcularSalario(): void {
        const salario = this.salarioBase + (this.ventasRealizadas * 0.1);
        console.log("El salario del empleado por comisión " + this.nombre + " es: " + salario);
    }
}

const empleadoHoras = new EmpleadoPorHoras("Elvis", 40, 15);
empleadoHoras.calcularSalario();
const empleadoFijo = new EmpleadoFijo("Dania", 0, 2000);
empleadoFijo.calcularSalario();
const empleadoComision = new EmpleadoComision("John", 0, 1000, 5000);
empleadoComision.calcularSalario();