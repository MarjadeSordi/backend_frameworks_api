module.exports =  {
  "type": "mysql",
  "host": process.env.host,
  "port": process.env.porta,
  "username": process.env.user,
  "password": process.env.password,
  "database": process.env.database,
  "entities": [
     "src/app/models/*.ts"
  ],
  "migrations": [
     "src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "src/database/migrations"
  }
}

console.log('aqui2');