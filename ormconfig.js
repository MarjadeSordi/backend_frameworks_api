require("dotenv").config();

module.exports =  {
  "type": "mysql",
  "host": process.env.localhost,
  "port": process.env.PORT || 3000,
  "username": process.env.user,
  "password": process.env.password,
  "database": process.env.database,
  "timeout"      : 60 * 60 * 1000,
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