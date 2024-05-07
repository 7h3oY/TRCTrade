import { DataTypes } from 'sequelize';
import sequelize from '../db/conexion';

export const Usuario = sequelize.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nivel_usuario: {
        type: DataTypes.INTEGER,        
    },
    unombre: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido_pat: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido_mat: {
        type: DataTypes.STRING(100),
        allowNull: true
    }
}, )

export default Usuario;