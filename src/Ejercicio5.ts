abstract class Pago {
    total: string;
    constructor(total: string) {
        this.total = total;
    }
    abstract procesarPago(a: string): void;
}
class PagoEfectivo extends Pago {
    procesarPago(efectivo: string): void {
        let exec= parseFloat(efectivo)-parseFloat(this.total);
        console.log("Cambio: " + exec);
    }
}
class PagoTarjeta extends Pago {
    
    procesarPago(efectivo: string): void {
        if(parseFloat(efectivo) >= parseFloat(this.total)){
            let exec= parseFloat(efectivo)-parseFloat(this.total);
            let nuevoSaldo= exec;
            console.log("Saldo restante: " + nuevoSaldo);
        }
        else{
            console.log("Targeta declinada");
        }
    }
    }


class TransferenciaBancaria extends Pago {
    procesarPago(saldo: string): void {
        console.log("Procesando transferencia bancaria");
    }
}
const pagoEfectivo = new PagoEfectivo("25");
pagoEfectivo.procesarPago("50");

const pagoTarjeta = new PagoTarjeta("100");
pagoTarjeta.procesarPago("100");

const transferenciaBancaria = new TransferenciaBancaria("200");
transferenciaBancaria.procesarPago("200");
