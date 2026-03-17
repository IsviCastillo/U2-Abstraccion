class Pago {
}
class PagoEfectivo extends Pago {
    procesarPago() {
        console.log("Procesando pago en efectivo");
    }
}
class PagoTarjeta extends Pago {
    procesarPago() {
        console.log("Procesando pago con tarjeta");
    }
}
class TransferenciaBancaria extends Pago {
    procesarPago() {
        console.log("Procesando transferencia bancaria");
    }
}
const pagoEfectivo = new PagoEfectivo();
pagoEfectivo.procesarPago();
const pagoTarjeta = new PagoTarjeta();
pagoTarjeta.procesarPago();
const transferenciaBancaria = new TransferenciaBancaria();
transferenciaBancaria.procesarPago();
export {};
//# sourceMappingURL=Ejercicio5.js.map