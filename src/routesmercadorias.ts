import {Router} from 'express';
import MercadoriaController from './app/controller/Mercadoriacontroller';

const routes = Router();

routes.get('/', MercadoriaController.listar)
routes.post('/', MercadoriaController.inserir)
routes.get("/find", MercadoriaController.buscarPorName);

module.exports = routes;