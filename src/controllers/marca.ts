import { Request, Response } from "express";
import ServicioMarca from "../services/marca";
import { handleHttp } from "../utils/error.handle";


 
const   Crear = async ({ body }: Request, res: Response) => {
      
      const respuesta :any = await ServicioMarca.Crear( body );

      if (respuesta === "ALREADY_unombre") {
        res.status(422);
        res.send("El marca Existe");
      } else {
        res.send(respuesta);
      }

      
  };

  const Actualizar = async (req: Request, res: Response) => {
    const { id } = req.params   
      if(id){
        try {
          const respuesta: any = await ServicioMarca.Actualizar( req.body, parseInt(id));
          if (respuesta === "MARCA_NO_EXISTE" ) {
            res.status(404);
            res.send("MARCA_NO_EXISTE");
          } else {
            res.send(respuesta);
          }
        } catch (e) {         
          handleHttp(res, "ERROR_ACTUALIZAR_MARCA");
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
        const respuesta:any = await ServicioMarca.DatosMarca(parseInt(id));
        if (respuesta === "MARCA_NO_EXISTE" ) {
          res.status(404);
          res.send("MARCA_NO_EXISTE");
        } else {
          res.send(respuesta);
        }
      } catch (e) {
       
        handleHttp(res, "ERROR_DATOS_MARCA");
      }

    }else{
      res.status(400);
      res.send("SIN_ID");

    }
    

  };
  const  Listar = async ({ body }: Request, res: Response) => {
  console.log('ListaMarcas');
      try {
          const response:any = await ServicioMarca.Listar();
          res.send(response);
        } catch (e) {
         
          handleHttp(res, "ERROR_LISTAR_MARCAS");
        }

  };

  const Borrar = async (req: Request, res: Response) => {
    const { id } = req.params    
    if(id){
      try {
        const respuesta:any = await ServicioMarca.Borrar(parseInt(id));
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


  
  const MarcaCtrl = {
    Crear,
    Actualizar,
    Datos,
    Listar,
    Borrar
  };

 
export  default MarcaCtrl;



