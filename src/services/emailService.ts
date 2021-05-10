interface IMailTo {  // Seguindo o padrão (não obrigatório) de toda interface começar com I(maiúsculo) 
    name: String;
    email: String;
}

interface IMailMessage {
    subject: String;
    body: String;
    attachment?: string[];
}

interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage;
}

class emailService {
    sendMail({ to, message }: IMessageDTO) { // Data Transfer Object
        console.log(`E-mail enviado para ${to.name}: ${message.subject}`)
    }
}

export default emailService;