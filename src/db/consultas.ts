import sequelize from "./conexion";



 const Listar = async (tabla:string, Where:string, Modelo:any)=> {
        let query=" SELECT * FROM "+tabla+" WHERE  "+ Where;
      
        const Lista: any = await sequelize.query(query,{ model: Modelo,
          mapToModel: true, raw:true}
        );  
       
       
        

        if(Lista.length==0) return false;
        
        
        return Lista;
      };
   
const Unico = async (tabla:string, Where:string, Modelo:any)=> {
  
           
           
            const Lista = await Listar(tabla, Where, Modelo); 
           let Retorno=Lista[0];
            return Retorno;
      };


const ConsultasDB = {
    Unico,
    Listar
  };

export default ConsultasDB;