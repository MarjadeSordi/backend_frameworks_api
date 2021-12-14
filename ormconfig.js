require("dotenv").config();

module.exports =  {
  "type": "mysql",
  "host": process.env.localhost,
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
  "connectTimeout": 1500,
  "extra": {
   "connectionLimit": 5
}

}

console.log('aqui2');