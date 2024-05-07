
import ConsultasDB from "../db/consultas";
import { Puja } from "../interfaces/puja.interface";
import PujaModel from "../models/puja";

async function DataPuja(idPuja:number){
  const Puja: any = await PujaModel.findOne({raw:true, where: { id: idPuja}  });
  return Puja;
 }   
  const Crear = async ( body: Puja) => {
    const ultimaPuja = await ConsultasDB.Unico( "pujas" , " id_moto != "+body.id_moto+" ORDER BY id DESC",PujaModel );
  if(!ultimaPuja || ultimaPuja.monto<body.monto){
          let NuevaPuja = await PujaModel.create( {
        
            id_moto : body.id_moto,
            id_pujador : body.id_pujador,
            monto : body.monto,
        
          },{raw:true});
          
          return NuevaPuja;    
  }else{

    return "MONTO_INSUFICIENTE";
  }

   
  };
  const  Actualizar = async (body: Puja, idPuja:number )=> {

    const Puja = await DataPuja(idPuja);  
      if(!Puja) return "PUJA_NO_EXISTE";    
       return Puja;
  }
  const Listar = async ()=> {
  
    const ListaPujas = await PujaModel.findAll( {raw:true});
    return ListaPujas
    
  };
  const ListarPorUsuario = async (id_pujador:any)=> {
  
    const ListaFavoritos = await PujaModel.findAll({raw:true, where: { id_pujador: id_pujador}  });
    return ListaFavoritos
    
  }; 
  const ListarPorMoto = async (idMoto:any)=> {
  
    const ListaFavoritos = await PujaModel.findAll({raw:true, where: { id_moto: idMoto}  });
    return ListaFavoritos
    
  }; 
  
  const DatosPuja = async (idPuja:number) => {
    console.log(idPuja);
    const Puja = await DataPuja(idPuja);
    console.log(Puja);
     if(Puja){
       return Puja;
     }else{
      return "PUJA_NO_EXISTE";
     }
  }
  const Borrar = async (idPuja:number) => {

        try {
          await PujaModel.destroy({ where: { id:idPuja } })
          return "PUJA_ELIMINADO";
      } catch (error) {
          return "ERROR_AL_ELIMINAR";
      }
        
  }

  
  const PujaServicio = {
    Crear,
    Actualizar,
    DatosPuja,
    Listar,
    Borrar,
    ListarPorUsuario,
    ListarPorMoto
  };

 
export  default PujaServicio;
