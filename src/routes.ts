import {Router} from 'express';
import MercadoriaController from './app/controller/Mercadoriacontroller';
import MovimentoMercadoriaController from './app/controller/MovimentoMercadoriaController';

const routes = Router ();
 
routes.get('/mercadorias', MercadoriaController.listar)
routes.post('/mercadorias', MercadoriaController.inserir)
routes.get("/mercadorias/find", MercadoriaController.buscarPorName);

/* Movimentação de Produto */

routes.get('/carrinho', MovimentoMercadoriaController.listar);
routes.post('/carrinho', MovimentoMercadoriaController.inserir);
routes.get('/carrinho/find', MovimentoMercadoriaController.buscarPorName);
routes.put('/carrinho/editar', MovimentoMercadoriaController.atualizar);
routes.delete('/carrinho/excluir', MovimentoMercadoriaController.deletar);



export default routes; 