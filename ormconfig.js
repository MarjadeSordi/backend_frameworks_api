require("dotenv").config();

module.exports =  {
  "type": "mysql",
  "host": process.env.localhost,
  "port": process.env.PORT,
  "username": process.env.user,
  "password": process.env.password,
  "database": process.env.database,
  "entities": [
     "dist/app/models/*.js"
  ],
  "migrations": [
     "src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "src/database/migrations"
  },
  "insecureAuth": true,
 " multipleStatements": true 

}

console.log('aqui2');