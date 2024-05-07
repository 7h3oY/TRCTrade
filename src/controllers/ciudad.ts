import { Request, Response } from "express";
import ServicioCiudad from "../services/ciudad";
import { handleHttp } from "../utils/error.handle";


  
  const  Listar = async ({ body }: Request, res: Response) => {
 
      try {
          const response = await ServicioCiudad.Listar();
          res.send(response);
        } catch (e) {
         
          handleHttp(res, "ERROR_LISTAR_CIUDADES");
        }

  };

  const  ListarRegiones = async ({ body }: Request, res: Response) => {
 
    try {
        const response = await ServicioCiudad.ListarRegiones();
        res.send(response);
      } catch (e) {
       
        handleHttp(res, "ERROR_LISTAR_REGIONES");
      }

};

const  ListarComunas = async ({ body }: Request, res: Response) => {
 
  try {
      const response = await ServicioCiudad.ListarComunas();
      res.send(response);
    } catch (e) {
     
      handleHttp(res, "ERROR_LISTAR_COMUNAS");
    }

};
  
  const CiudadCtrl = {
    
    Listar,   
    ListarRegiones,
    ListarComunas
  };

 
export  default CiudadCtrl;



