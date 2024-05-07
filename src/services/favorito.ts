import { Favorito } from "../interfaces/favorito.interface";
import FavoritoModel from "../models/favorito";


async function DataFavorito(idFavorito:number){
  const Favorito: any = await FavoritoModel.findOne({raw:true, where: { id: idFavorito}  });
  return Favorito;
 }   
  const Crear = async ( body: Favorito) => {
    let NuevoFavorito = await FavoritoModel.create( {
      id_moto : body.id_moto,
	id_usuario : body.id_usuario,

  
    },{raw:true});
    
    return NuevoFavorito;
  };

  const Listar = async ()=> {
  
    const ListaFavoritos = await FavoritoModel.findAll( {raw:true});
    return ListaFavoritos
    
  };
   const ListarPorUsuario = async (idUsuario:any)=> {
  
    const ListaFavoritos = await FavoritoModel.findAll({raw:true, where: { id_usuario: idUsuario}  });
    return ListaFavoritos
    
  }; 
  const ListarPorMoto = async (idMoto:any)=> {
  
    const ListaFavoritos = await FavoritoModel.findAll({raw:true, where: { id_moto: idMoto}  });
    return ListaFavoritos
    
  }; 
  const DatosFavorito = async (idFavorito:number) => {
    console.log(idFavorito);
    const Favorito = await DataFavorito(idFavorito);
    console.log(Favorito);
     if(Favorito){
       return Favorito;
     }else{
      return "FAVORITO_NO_EXISTE";
     }
  }
  const Borrar = async (idFavorito:number) => {

        try {
          await FavoritoModel.destroy({ where: { id:idFavorito } })
          return "FAVORITO_ELIMINADO";
      } catch (error) {
          return "ERROR_AL_ELIMINAR";
      }
        
  }

  
  const FavoritoServicio = {
    Crear,
    
    DatosFavorito,
    Listar,
    ListarPorUsuario,
    ListarPorMoto,
    Borrar
  };

 
export  default FavoritoServicio;
