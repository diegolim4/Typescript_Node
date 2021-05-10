import { Router } from 'express';
import userControllers from './controllers/userController'

const routes = Router()

routes.get('/users', userControllers.index )


export default routes;