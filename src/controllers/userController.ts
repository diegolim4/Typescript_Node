import { Request, Response } from 'express'
import emailService from '../services/emailService';

const users = [
    {
        name: 'Diego Lima',
        email: 'lima.j.diego@gmail.com'
    }
]


export default {
    async index(req: Request, res: Response) {  // Para fazer a listagem dos users
        return res.json(users);                 // Retornar um arquivo json
    },

    async create(req: Request, res: Response) {
        const emailservice = new emailService();

        emailservice.sendMail({
            to: {
                name: 'Diego Lima',
                email: 'lima.j.diego@gmail.com'
            },
            message: {
                subject: 'Bem-vindo ao sistema',
                body: 'Seja bem-vindo'
            }
        });
        return res.send('email enviado')
    }

};

