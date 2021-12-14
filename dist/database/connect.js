"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
console.log('aqui');
(0, typeorm_1.createConnection)().then(() => console.log('servidor ok'));
