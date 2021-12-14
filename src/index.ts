import 'reflect-metadata';
import express from 'express';
import './database/connect';
require("dotenv").config();
const app = express();


app.use(express.json());


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({
    extended: true
})) // for parsing application/x-www-form-urlencoded


const carrinhoRota = require('./routescarrinho');
app.use('/carrinho', carrinhoRota);

const mercadoriaRota = require('./routesmercadorias');
app.use('/mercadorias', mercadoriaRota);


app.listen(process.env.PORT || 3000, () =>
    console.log(`Iniciando o servidor na porta ${process.env.PORT}`)
);