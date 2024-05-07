import { Request, Response } from "express";
import ServicioPuja from "../services/puja";
import { handleHttp } from "../utils/error.handle";


 
const   Crear = async ({ body }: Request, res: Response) => {
      console.log(body) 
      const respuesta:any = await ServicioPuja.Crear( body );

      if (respuesta === "MONTO_INSUFICIENTE" ) {
        res.status(422);
        res.send("MONTO_INSUFICIENTE");
      } else {
        res.send(respuesta);
      }

      
  };

  const Actualizar = async (req: Request, res: Response) => {
    const { id } = req.params   
      if(id){
        try {
          const respuesta: any = await ServicioPuja.Actualizar( req.body, parseInt(id));
          if (respuesta === "PUJA_NO_EXISTE" ) {
            res.status(404);
            res.send("PUJA_NO_EXISTE");
          } else {
            res.send(respuesta);
          }
        } catch (e) {         
          handleHttp(res, "ERROR_ACTUALIZAR_PUJA");
        }

    }else{
      res.status(400);
      res.send("SIN_ID");
    }    

  };
  const Datos = async (req: Request, res: Response) => {
    const { id } = req.params    
    if(id){
      try {
        const respuesta = await ServicioPuja.DatosPuja(parseInt(id));
        if (respuesta === "PUJA_NO_EXISTE" ) {
          res.status(404);
          res.send("PUJA_NO_EXISTE");
        } else {
          res.send(respuesta);
        }
      } catch (e) {
       
        handleHttp(res, "ERROR_DATOS_PUJA");
      }

    }else{
      res.status(400);
      res.send("SIN_ID");

    }
    

  };
  const  Listar = async ({ body }: Request, res: Response) => {
  console.log('ListaPujas');
      try {
          const response = await ServicioPuja.Listar();
          res.send(response);
        } catch (e) {
         
          handleHttp(res, "ERROR_LISTAR_PUJAS");
        }

  };

  const Borrar = async (req: Request, res: Response) => {
    const { id } = req.params    
    if(id){
      try {
        const respuesta:any = await ServicioPuja.Borrar(parseInt(id));
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
  const  ListarPorUsuario= async (req: Request, res: Response) => {
    const { idUsuario } = req.params    
    console.log('ListaFavoritos');
        try {
            const response = await ServicioPuja.ListarPorUsuario(idUsuario);
            res.send(response);
          } catch (e) {
           
            handleHttp(res, "ERROR_LISTAR_FAVORITOS");
          }
  
    };

    const  ListarPorMoto= async (req: Request, res: Response) => {
      const { idMoto } = req.params    
      console.log('ListaFavoritos');
          try {
              const response = await ServicioPuja.ListarPorMoto(idMoto);
              res.send(response);
            } catch (e) {
             
              handleHttp(res, "ERROR_LISTAR_FAVORITOS");
            }
    
      };

  
  const PujaCtrl = {
    Crear,
    Actualizar,
    Datos,
    Listar,
    Borrar,
    ListarPorUsuario,
    ListarPorMoto
  };

 
export  default PujaCtrl;



