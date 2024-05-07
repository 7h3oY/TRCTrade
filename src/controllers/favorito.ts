import { Request, Response } from "express";
import ServicioFavorito from "../services/favorito";
import { handleHttp } from "../utils/error.handle";


 
const   Crear = async ({ body }: Request, res: Response) => {
      
      const respuesta: any = await ServicioFavorito.Crear( body );

      if (respuesta === "ALREADY_unombre" || respuesta === "ALREADY_email" ) {
        res.status(422);
        res.send("El favorito Existe");
      } else {
        res.send(respuesta);
      }

      
  };

  
  const Datos = async (req: Request, res: Response) => {
    const { id } = req.params    
    if(id){
      try {
        const respuesta = await ServicioFavorito.DatosFavorito(parseInt(id));
        if (respuesta === "FAVORITO_NO_EXISTE" ) {
          res.status(404);
          res.send("FAVORITO_NO_EXISTE");
        } else {
          res.send(respuesta);
        }
      } catch (e) {
       
        handleHttp(res, "ERROR_DATOS_FAVORITO");
      }

    }else{
      res.status(400);
      res.send("SIN_ID");

    }
    

  };
  const  Listar = async ({ body }: Request, res: Response) => {
  console.log('ListaFavoritos');
      try {
          const response = await ServicioFavorito.Listar();
          res.send(response);
        } catch (e) {
         
          handleHttp(res, "ERROR_LISTAR_FAVORITOS");
        }

  };

  const  ListarPorUsuario= async (req: Request, res: Response) => {
    const { idUsuario } = req.params    
    console.log('ListaFavoritos');
        try {
            const response = await ServicioFavorito.ListarPorUsuario(idUsuario);
            res.send(response);
          } catch (e) {
           
            handleHttp(res, "ERROR_LISTAR_FAVORITOS");
          }
  
    };

    const  ListarPorMoto= async (req: Request, res: Response) => {
      const { idMoto } = req.params    
      console.log('ListaFavoritos');
          try {
              const response = await ServicioFavorito.ListarPorMoto(idMoto);
              res.send(response);
            } catch (e) {
             
              handleHttp(res, "ERROR_LISTAR_FAVORITOS");
            }
    
      };
  const Borrar = async (req: Request, res: Response) => {
    const { id } = req.params    
    if(id){
      try {
        const respuesta:any = await ServicioFavorito.Borrar(parseInt(id));
        if (respuesta === "ERROR_AL_ELIMINAR" ) {
          res.status(404);
          res.send("ERROR_AL_ELIMINAR");
        } else {
          res.send(respuesta);
        }
      } catch (e) {
       
        handleHttp(res, "ERROR_AL_ELIMINAR");
      }

    }else{
      res.status(400);
      res.send("SIN_ID");

    }
    

  };


  
  const FavoritoCtrl = {
    Crear,   
    Datos,
    Listar,
    Borrar,
    ListarPorUsuario,
    ListarPorMoto
  };

 
export  default FavoritoCtrl;



