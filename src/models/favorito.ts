import { DataTypes } from 'sequelize';
import sequelize from '../db/conexion';


export const Favorito = sequelize.define('favorito', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_moto:{
        type: DataTypes.INTEGER,
               
    },
    id_usuario: {
        type: DataTypes.INTEGER,
    },

}, )
export default Favorito;