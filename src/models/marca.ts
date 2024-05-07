import { DataTypes } from 'sequelize';
import sequelize from '../db/conexion';


export const Marca = sequelize.define('marca', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
     nombre:{
        type:DataTypes.STRING(100),
               
    },
    
    

}, )
export default Marca;