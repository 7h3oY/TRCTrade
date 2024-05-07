import { Router } from "express";
import CiudadCtrl from "../controllers/ciudad";
const router = Router();
router.get("/", (req, res) => { res.json("Ciudades"); 
// #swagger.ignore = true } 
});

router.get("/Listar", CiudadCtrl.Listar, ()=> {    
    
    /*       #swagger.auto = false    
             #swagger.path = '/ciudad/Listar'           
             #swagger.tags = ['ciudad']  
            #swagger.responses[200] = {
                description: "Retorna todas las regiones, provincias y comunas",
                content: {
                    "application/json": {
                        schema:{  
                            $ref: "#/components/schemas/Ciudad",
                        }
                    }           
                }
            } 
          
         
    */
 } );

 router.get("/ListarRegiones", CiudadCtrl.ListarRegiones, ()=> {    
    
    /*       #swagger.auto = false    
             #swagger.path = '/ciudad/ListarRegiones'           
             #swagger.tags = ['ciudad']  
            #swagger.responses[200] = {
                description: "Retorna todas las regiones",
                content: {
                    "application/json": {
                        schema:{  
                            $ref: "#/components/schemas/Ciudad",
                        }
                    }           
                }
            } 
          
         
    */
 } );

 router.get("/ListarComunas", CiudadCtrl.ListarComunas, ()=> {    
    
    /*       #swagger.auto = false    
             #swagger.path = '/ciudad/ListarComunas'           
             #swagger.tags = ['ciudad']  
            #swagger.responses[200] = {
                description: "Retorna todas las comunas",
                content: {
                    "application/json": {
                        schema:{  
                            $ref: "#/components/schemas/Ciudad",
                        }
                    }           
                }
            } 
          
         
    */
 } );


export { router };

