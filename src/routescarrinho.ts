import {Router} from 'express';
import MovimentoMercadoriaController from './app/controller/MovimentoMercadoriaController';

const routes = Router();
 

/* Movimentação de Produto */

routes.get('/', MovimentoMercadoriaController.listar);
routes.post('/', MovimentoMercadoriaController.inserir);
routes.get('/find', MovimentoMercadoriaController.buscarPorName);
routes.put('/editar', MovimentoMercadoriaController.atualizar);
routes.delete('/excluir', MovimentoMercadoriaController.deletar);



module.exports = routes;