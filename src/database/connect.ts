import { createConnection } from 'typeorm';

console.log('aqui');

createConnection().then(() => console.log('servidor ok'));