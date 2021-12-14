"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Mercadoriacontroller_1 = __importDefault(require("./app/controller/Mercadoriacontroller"));
const routes = (0, express_1.Router)();
routes.get('/', Mercadoriacontroller_1.default.listar);
routes.post('/', Mercadoriacontroller_1.default.inserir);
routes.get("/find", Mercadoriacontroller_1.default.buscarPorName);
module.exports = routes;
