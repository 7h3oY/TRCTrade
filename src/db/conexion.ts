import "dotenv/config";
import { Sequelize } from "sequelize";
const BD_NOMBRE = process.env.BD_NOMBRE ?? 'test';
const DB_USUARIO = process.env.DB_USUARIO ?? "root";
const DB_PASS = process.env.DB_PASS ?? "";

const sequelize = new Sequelize(BD_NOMBRE, DB_USUARIO, DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',   
});



export default sequelize;


