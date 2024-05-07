import { DataTypes } from 'sequelize';
import sequelize from '../db/conexion';


export const Puja = sequelize.define('puja', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },   
    id_moto: {
        type: DataTypes.INTEGER,
    },
    id_pujador:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    monto:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    
    

}, )
export default Puja;