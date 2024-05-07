import { Request, Response } from "express";
import ServicioUsuario from "../services/usuario";
import { handleHttp } from "../utils/error.handle";


 
const   Crear = async ({ body }: Request, res: Response) => {
      
      const respuesta = await ServicioUsuario.Crear( body );

      if (respuesta === "ALREADY_unombre" || respuesta === "ALREADY_email" ) {
        res.status(422);
        res.send("El usuario Existe");
      } else {
        res.send(respuesta);
      }

      
  };

  const Actualizar = async (req: Request, res: Response) => {
    const { id } = req.params   
      if(id){
        try {
          const respuesta: any = await ServicioUsuario.Actualizar( req.body, parseInt(id));
          if (respuesta === "USUARIO_NO_EXISTE" ) {
            res.status(404);
            res.send("USUARIO_NO_EXISTE");
          } else {
            res.send(respuesta);
          }
        } catch (e) {         
          handleHttp(res, "ERROR_ACTUALIZAR_USUARIO");
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
        const respuesta = await ServicioUsuario.DatosUsuario(parseInt(id));
        if (respuesta === "USUARIO_NO_EXISTE" ) {
          res.status(404);
          res.send("USUARIO_NO_EXISTE");
        } else {
          res.send(respuesta);
        }
      } catch (e) {
       
        handleHttp(res, "ERROR_DATOS_USUARIO");
      }

    }else{
      res.status(400);
      res.send("SIN_ID");

    }
    

  };
  const  Listar = async ({ body }: Request, res: Response) => {
  console.log('ListaUsuarios');
      try {
          const response = await ServicioUsuario.Listar();
          res.send(response);
        } catch (e) {
         
          handleHttp(res, "ERROR_LISTAR_USUARIOS");
        }

  };

  const Borrar = async (req: Request, res: Response) => {
    const { id } = req.params    
    if(id){
      try {
        const respuesta:any = await ServicioUsuario.Borrar(parseInt(id));
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


  
  const UsuarioCtrl = {
    Crear,
    Actualizar,
    Datos,
    Listar,
    Borrar
  };

 
export  default UsuarioCtrl;



