abstract class Producto {
    nombre: string;
    precio: number;
    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }
    abstract calcularPrecioFinal(): void;
    abstract mostrarInformacion(): void;
}

class Electronico extends Producto {
    calcularPrecioFinal(): void {
        const precioFinal = this.precio + (this.precio * 0.13);
        console.log("El precio final del producto electrónico " + this.nombre + " es: " + precioFinal);
    }
    mostrarInformacion(): void {
        console.log("Producto: " + this.nombre + ", Precio: " + this.precio);
    }
}
class Ropa extends Producto {
    calcularPrecioFinal(): void {
        const precioFinal = this.precio + (this.precio * 0.08);
        console.log("El precio final del producto de ropa " + this.nombre + " es: " + precioFinal);
    }
    mostrarInformacion(): void {
        console.log("Producto: " + this.nombre + ", Precio: " + this.precio);
    }
}
class Alimentos extends Producto {
    calcularPrecioFinal(): void {
        const precioFinal = this.precio + (this.precio * 0.05);
        console.log("El precio final del producto de alimentos " + this.nombre + " es: " + precioFinal);
    }
    mostrarInformacion(): void {
        console.log("Producto: " + this.nombre + ", Precio: " + this.precio);
    }
}

const electronico = new Electronico("Laptop", 1000);
electronico.mostrarInformacion();
electronico.calcularPrecioFinal();

const ropa = new Ropa("Camisa", 50);
ropa.mostrarInformacion();
ropa.calcularPrecioFinal();

const alimentos = new Alimentos("Manzana", 2);
alimentos.mostrarInformacion();
alimentos.calcularPrecioFinal();

