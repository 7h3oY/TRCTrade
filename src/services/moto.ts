import ConsultasDB from "../db/consultas";
import { Moto } from "../interfaces/moto.interface";
import MotoModel from "../models/moto";
import PujaModel from "../models/puja";
async function DataMoto(idMoto:number){
  const Moto: any = await MotoModel.findOne({raw:true, where: { id: idMoto}  });
  return Moto;
 }   
  const Crear = async ( body: Moto) => {
    let NuevaMoto = await MotoModel.create( {
      estado : body.estado,
      id_vendedor : body.id_vendedor,
      inicio_remate : body.inicio_remate,
      fin_remate : body.fin_remate,
      marca : body.marca,
      modelo : body.modelo,
      ano : body.ano,
      kilometraje : body.kilometraje,
      duenos : body.duenos,
      comuna : body.comuna,
      factura : body.factura,
      precio_minimo : body.precio_minimo,

  
    },{raw:true});
    
    return NuevaMoto;
  };
  const  Actualizar = async (body: Moto, idMoto:number )=> {

    const Moto = await DataMoto(idMoto);
    
   
   if(!Moto) return "MOTO_NO_EXISTE";
    
       return Moto;
  }
  const  FinRemate = async (body: Moto, idMoto:number )=> {

    const Moto = await DataMoto(idMoto);
 
   if(!Moto) return "MOTO_NO_EXISTE";
    
   let estado="finalizada";
   let id_ganador=0;
   const ultimaPuja = await ConsultasDB.Unico( "pujas" , " id_moto != "+idMoto+" ORDER BY id DESC",PujaModel );
   if(ultimaPuja){
        estado="subastada";
        id_ganador = ultimaPuja.id_pujador;

   }
    let respuesta= await MotoModel.update( {
    estado : estado,
    id_ganador : id_ganador,
   

  },{ where: { id: idMoto } }  );

   
       return respuesta;
  }
  const Listar = async ()=> {
  
    const ListaMotos = await MotoModel.findAll( {raw:true});
    return ListaMotos
    
  };
  const ListarPorEstado = async (estado:string)=> {
  

    //const ListaMotos = await MotoModel.findAll( {raw:true, where: { estado:estado }});
    const ListaMotos = await ConsultasDB.Listar( "motos" , " estado = '"+estado+"' ORDER BY id DESC",MotoModel );
    return ListaMotos
    
  };
  
  const DatosMoto = async (idMoto:number) => {
   
    const Moto = await DataMoto(idMoto);
 
     if(Moto){
       return Moto;
     }else{
      return "MOTO_NO_EXISTE";
     }
  }
  const Borrar = async (idMoto:number) => {

        try {
          await MotoModel.destroy({ where: { id:idMoto } })
          return "MOTO_ELIMINADO";
      } catch (error) {
          return "ERROR_AL_ELIMINAR";
      }
        
  }
  const chileAutos= async()=>{
    try{
      const apiChileautos = "https://intranerd.cl/APImotos/v1/";
      const response = await fetch(apiChileautos);
      return await response.json();
    }catch(error){
      return "ERROR_CHILEAUTOS_NO_RESPONDE"
    }
  }
  
  const MotoServicio = {
    Crear,
    Actualizar,
    DatosMoto,
    Listar,
    Borrar,
    ListarPorEstado,
    chileAutos,
    FinRemate
  };

 
export  default MotoServicio;
