"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
require("./database/connect");
require("dotenv").config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.json()); // for parsing application/json
app.use(express_1.default.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded
const carrinhoRota = require('./routescarrinho');
app.use('/carrinho', carrinhoRota);
const mercadoriaRota = require('./routesmercadorias');
app.use('/mercadorias', mercadoriaRota);
app.listen(process.env.PORT || 3000, () => console.log(`Iniciando o servidor na porta ${process.env.PORT}`));
