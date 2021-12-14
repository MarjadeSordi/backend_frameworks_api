"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MovimentoMercadoriaController_1 = __importDefault(require("./app/controller/MovimentoMercadoriaController"));
const routes = (0, express_1.Router)();
/* Movimentação de Produto */
routes.get('/', MovimentoMercadoriaController_1.default.listar);
routes.post('/', MovimentoMercadoriaController_1.default.inserir);
routes.get('/find', MovimentoMercadoriaController_1.default.buscarPorName);
routes.put('/editar', MovimentoMercadoriaController_1.default.atualizar);
routes.delete('/excluir', MovimentoMercadoriaController_1.default.deletar);
module.exports = routes;
