import { Router } from 'express';
import userControllers from './controllers/userController'

const routes = Router()

routes.get('/users', userControllers.index )
routes.post('/users', userControllers.create)


export default routes;