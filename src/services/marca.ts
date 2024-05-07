import { Marca } from "../interfaces/marca.interface";
import MarcaModel from "../models/marca";


async function DataMarca(idMarca:number){
  const Marca: any = await MarcaModel.findOne({raw:true, where: { id: idMarca}  });
  return Marca;
 }   
  const Crear = async ( body: Marca) => {
  
    
    return "OK";
  };
  const  Actualizar = async (body: Marca, idMarca:number )=> {

    const Marca = await DataMarca(idMarca);
    
   
   if(!Marca) return "MARCA_NO_EXISTE";
    
       return Marca;
  }
  const Listar = async ()=> {
  
    const ListaMarcas = await MarcaModel.findAll( {raw:true});
  
    return ListaMarcas
    
  };
   
  
  const DatosMarca = async (idMarca:number) => {
    console.log(idMarca);
    const Marca = await DataMarca(idMarca);
    console.log(Marca);
     if(Marca){
       return Marca;
     }else{
      return "MARCA_NO_EXISTE";
     }
  }
  const Borrar = async (idMarca:number) => {

        try {
          await MarcaModel.destroy({ where: { id:idMarca } })
          return "MARCA_ELIMINADO";
      } catch (error) {
          return "ERROR_AL_ELIMINAR";
      }
        
  }

  
  const MarcaServicio = {
    Crear,
    Actualizar,
    DatosMarca,
    Listar,
    Borrar
  };

 
export  default MarcaServicio;
