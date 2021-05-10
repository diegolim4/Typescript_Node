import {Request, Response} from 'express'

const users = [
    {
        name: 'Diego',
        email: 'lima.j.diego@gmail.com'
    }
]


export default {
    async index(req: Request, res: Response){  // Para fazer a listagem dos users
        return res.json(users)                 // Retornar um arquivo json
    }
};