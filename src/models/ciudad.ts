import { DataTypes } from 'sequelize';
import sequelize from '../db/conexion';


export const Ciudad = sequelize.define('ciudad', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },   
    tipo:{
        type:DataTypes.STRING(30),
               
    },
    nombre:{
        type:DataTypes.STRING(200),
               
    },
    sigla:{
        type:DataTypes.STRING(5),
    },
    id_padre:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    
    
    

},
{
    tableName: "ciudades",
  
}

)
export default Ciudad;