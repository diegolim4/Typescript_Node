interface IMailTo {  // Seguindo o padrão (não obrigatório) de toda interface começar com I(maiúsculo) 
    name: String;
    email: String;
}

interface IMailMessage {
    subject: String;
    body: String;
    attachment?: string[] ; 
}

class emailService {
    sendMail(to: IMailTo, message: IMailMessage) {
        console.log(`E-mail enviado para ${to.name}: ${message.subject}`)
    }
}

export default emailService;