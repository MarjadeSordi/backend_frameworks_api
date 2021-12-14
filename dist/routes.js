"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Mercadoriacontroller_1 = __importDefault(require("./app/controller/Mercadoriacontroller"));
const MovimentoMercadoriaController_1 = __importDefault(require("./app/controller/MovimentoMercadoriaController"));
const routes = (0, express_1.Router)();
routes.get('/mercadorias', Mercadoriacontroller_1.default.listar);
routes.post('/mercadorias', Mercadoriacontroller_1.default.inserir);
routes.get("/mercadorias/find", Mercadoriacontroller_1.default.buscarPorName);
/* Movimentação de Produto */
routes.get('/carrinho', MovimentoMercadoriaController_1.default.listar);
routes.post('/carrinho', MovimentoMercadoriaController_1.default.inserir);
routes.get('/carrinho/find', MovimentoMercadoriaController_1.default.buscarPorName);
routes.put('/carrinho/editar', MovimentoMercadoriaController_1.default.atualizar);
routes.delete('/carrinho/excluir', MovimentoMercadoriaController_1.default.deletar);
exports.default = routes;
