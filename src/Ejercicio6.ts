abstract class  Notificacion {
    abstract enviar(): void;
}

class Email extends Notificacion{
    enviar(): void {
        console.log("Enviando notificación por Email");
    }
}
class SMS extends Notificacion{
    enviar(): void {
        console.log("Enviando notificación por SMS");
    }
}
class WhatsApp extends Notificacion{
    enviar(): void {
        console.log("Enviando notificación por WhatsApp");  
    }
}
const notificacionEmail = new Email();
notificacionEmail.enviar();
const notificacionSMS = new SMS();
notificacionSMS.enviar();
const notificacionWhatsApp = new WhatsApp();
notificacionWhatsApp.enviar();