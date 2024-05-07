import { DataTypes } from 'sequelize';
import sequelize from '../db/conexion';
export const Moto = sequelize.define('moto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estado:{
        type:DataTypes.STRING(30),
               
    },
    id_vendedor: {
        type: DataTypes.INTEGER,
    },
    id_ganador: {
        type: DataTypes.INTEGER,
        allowNull:true,
    },
    inicio_remate:{
        type:DataTypes.DATE,
        allowNull:true,
    },
    fin_remate:{
        type:DataTypes.DATE,
        allowNull:true,
    },
    marca: {
        type: DataTypes.INTEGER,
    },
    modelo: {
        type: DataTypes.STRING(100)
    },
    ano: {
        type: DataTypes.INTEGER,
    },
    kilometraje: {
        type: DataTypes.FLOAT,
    },
    duenos: {
        type: DataTypes.INTEGER,
    },
    comuna: {
        type: DataTypes.INTEGER,
    },
    factura:{
        type:DataTypes.STRING(2),
        defaultValue:"no",        
    },
    precio_minimo: {
        type: DataTypes.INTEGER,
    },
    portada:{
        type:DataTypes.TEXT,
        allowNull:true,
               
    },
    galeria:{
        type:DataTypes.TEXT,
        allowNull:true,
               
    },

}, )
export default Moto;