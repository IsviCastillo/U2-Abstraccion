abstract class Figura {
    base: number;
    altura: number;
    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    abstract calcularArea(): void;
    abstract calcularPerimetro(): void;
}

class Cuadrado extends Figura {
    calcularArea(): void {
        const area = this.base * this.base;
        console.log("El área del cuadrado es: " + area);
    }
    calcularPerimetro(): void {
        const perimetro = 4 * this.base;
        console.log("El perímetro del cuadrado es: " + perimetro);
    }
}
class Rectangulo extends Figura {
    calcularArea(): void {
        const area = this.base * this.altura;
        console.log("El área del rectángulo es: " + area);
    }
    calcularPerimetro(): void {
        const perimetro = 2 * (this.base + this.altura);
        console.log("El perímetro del rectángulo es: " + perimetro);
    }
}
class Circulo extends Figura {
    calcularArea(): void {
        const area = Math.PI * Math.pow(this.base / 2, 2);
        console.log("El área del círculo es: " + area.toFixed(2));
    }
    calcularPerimetro(): void {
        const perimetro = 2 * Math.PI * (this.base / 2);
        console.log("El perímetro del círculo es: " + perimetro.toFixed(2));
    }
}

const cuadrado = new Cuadrado(4, 0);
cuadrado.calcularArea();
cuadrado.calcularPerimetro();

const rectangulo = new Rectangulo(4, 3);
rectangulo.calcularArea();
rectangulo.calcularPerimetro();

const circulo = new Circulo(2, 0);
circulo.calcularArea();
circulo.calcularPerimetro();