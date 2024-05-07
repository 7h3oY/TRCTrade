
import CiudadModel from "../models/ciudad";
async function DataCiudad(idCiudad:number){
  const Ciudad: any = await CiudadModel.findOne({raw:true, where: { id: idCiudad}  });
  return Ciudad;
 }   

  const Listar = async ()=> {
  
    const ListaCiudades = await CiudadModel.findAll( {raw:true});
    return ListaCiudades
    
  };
  const ListarRegiones = async ()=> {
  
    const Lista = await CiudadModel.findAll({raw:true, where:{ tipo: 'region'}   });
    return Lista
    
  }; 
  const ListarComunas = async ()=> {
  
    const Lista = await CiudadModel.findAll({raw:true, where: { tipo: 'comuna'}  });
    return Lista
    
  }; 
  

  
  const CiudadServicio = { 
    Listar,   
    ListarRegiones,
    ListarComunas
  };

 
export  default CiudadServicio;
