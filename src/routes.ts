import { Router } from 'express';
import userControllers from './controllers/userController'

const routes = Router()

routes.get('/users', userControllers.index )
routes.get('/users/create', userControllers.create)


export default routes;