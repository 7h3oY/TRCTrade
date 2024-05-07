import { Request, Response } from "express";
import ServicioMoto from "../services/moto";
import { handleHttp } from "../utils/error.handle";


 
const   Crear = async ({ body }: Request, res: Response) => {
      
      const respuesta: any = await ServicioMoto.Crear( body );

      if (respuesta === "ALREADY_unombre" || respuesta === "ALREADY_email" ) {
        res.status(422);
        res.send("El moto Existe");
      } else {
        res.send(respuesta);
      }

      
  };

  const Actualizar = async (req: Request, res: Response) => {
    const { id } = req.params   
      if(id){
        try {
          const respuesta: any = await ServicioMoto.Actualizar( req.body, parseInt(id));
          if (respuesta === "MOTO_NO_EXISTE" ) {
            res.status(404);
            res.send("MOTO_NO_EXISTE");
          } else {
            res.send(respuesta);
          }
        } catch (e) {         
          handleHttp(res, "ERROR_ACTUALIZAR_MOTO");
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
        const respuesta = await ServicioMoto.DatosMoto(parseInt(id));
        if (respuesta === "MOTO_NO_EXISTE" ) {
          res.status(404);
          res.send("MOTO_NO_EXISTE");
        } else {
          res.send(respuesta);
        }
      } catch (e) {
       
        handleHttp(res, "ERROR_DATOS_MOTO");
      }

    }else{
      res.status(400);
      res.send("SIN_ID");

    }
    

  };
  const  Listar = async ({ body }: Request, res: Response) => {
  console.log('ListaMotos');
      try {
          const response = await ServicioMoto.Listar();
          res.send(response);
        } catch (e) {
         
          handleHttp(res, "ERROR_LISTAR_MOTOS");
        }

  };
  const  ListarPorEstado = async (req: Request, res: Response) => {
    const { estado } = req.params  
    console.log('ListaMotos');
        try {
            const response = await ServicioMoto.ListarPorEstado(estado);
            res.send(response);
          } catch (e) {
           
            handleHttp(res, "ERROR_LISTAR_MOTOS");
          }
  
    };
    const  FinRemate = async (req: Request, res: Response) => {
      const { id } = req.body;  
      console.log('ListaMotos');
          try {
              const response = await ServicioMoto.FinRemate(req.body, id);
              res.send(response);
            } catch (e) {
             
              handleHttp(res, "ERROR");
            }
    
      };
  const Borrar = async (req: Request, res: Response) => {
    const { id } = req.params    
    if(id){
      try {
        const respuesta:any = await ServicioMoto.Borrar(parseInt(id));
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


  
  const MotoCtrl = {
    Crear,
    Actualizar,
    Datos,
    Listar,
    Borrar,
    ListarPorEstado,
    FinRemate
  };

 
export  default MotoCtrl;



