import { createConnection } from 'typeorm';

console.log('aqui');

createConnection().then(async connection => {}).catch( Error => console.log(Error));