import { Router } from "express";
import FavoritoCtrl from "../controllers/favorito";
import { checkJwt } from "../middleware/session";
const router = Router();
router.get("/", (req, res) => { res.json("Favoritos"); 
// #swagger.ignore = true } 
});

router.get("/Listar",checkJwt, FavoritoCtrl.Listar, ()=> {    
    
    /*       #swagger.auto = false    
             #swagger.path = '/favorito/Listar'           
             #swagger.tags = ['favorito']  
            #swagger.responses[200] = {
                description: "Retorna todos los favoritos",
                content: {
                    "application/json": {
                        schema:{  
                            $ref: "#/components/schemas/Favorito",
                        }
                    }           
                }
            } 
           #swagger.security = [{"bearerAuth": [] }]
         
    */
 } );
 router.get("/ListarPorUsuario/:idUsuario",checkJwt, FavoritoCtrl.ListarPorUsuario, ()=> {    
    
    /*       #swagger.auto = false    
             #swagger.path = '/favorito/ListarPorUsuario/{idUsuario}'     
             #swagger.tags = ['favorito']  
            #swagger.responses[200] = {
                description: "Retorna todos los favoritos del usuario" ,
                content: {
                    "application/json": {
                        schema:{  
                            $ref: "#/components/schemas/Favorito",
                        }
                    }           
                }
            } 
           #swagger.security = [{"bearerAuth": [] }]
         
    */
 } );
 router.get("/ListarPorMoto/:idMoto",checkJwt, FavoritoCtrl.ListarPorMoto, ()=> {    
    
    /*       #swagger.auto = false    
             #swagger.path = '/favorito/ListarPorMoto/{idMoto}'      
             #swagger.tags = ['favorito']  
            #swagger.responses[200] = {
                description: "Retorna todos los favoritos de la moto" ,
                content: {
                    "application/json": {
                        schema:{  
                            $ref: "#/components/schemas/Favorito",
                        }
                    }           
                }
            } 
           #swagger.security = [{"bearerAuth": [] }]
         
    */
 } );
 router.post("/CambiarFavorito",checkJwt, FavoritoCtrl.Crear, ()=> {     
    /*  #swagger.auto = false    
             #swagger.path = '/favorito/CambiarFavorito'           
             #swagger.tags = ['favorito']
             #swagger.requestBody = {
                 description: 'Crear nuevo  favorito',   
                 required: true,
                 content: {
                     "application/json": {
                         schema: {
                             $ref: "#/components/schemas/NuevoFavorito" 
                         }  
                     }
                 }
             }
             #swagger.responses[422] = {description: "El Favorito ya existe", }  
             #swagger.security = [{"bearerAuth": [] }]
       
      */
 
 } );
router.post("/Crear",checkJwt, FavoritoCtrl.Crear, ()=> {     
   /*  #swagger.auto = false    
            #swagger.path = '/favorito/Crear'           
            #swagger.tags = ['favorito']
            #swagger.requestBody = {
                description: 'Crear nuevo  favorito',   
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/NuevoFavorito" 
                        }  
                    }
                }
            }
            #swagger.responses[422] = {description: "El Favorito ya existe", }  
            #swagger.security = [{"bearerAuth": [] }]
      
     */

} );

 router.delete("/:id",checkJwt,FavoritoCtrl.Borrar, ()=> {     
    /*  #swagger.auto = false    
             #swagger.path = '/favorito/{id}'           
             #swagger.tags = ['favorito']
             #swagger.parameters['id'] = { 
                description: 'Id del favorito',
                required: true,
                type: 'integer',  
                in: 'path'  
             }    
             #swagger.requestBody =  {            
             description: 'Eliminar un  favorito',
             required: true,
             
         }  
          #swagger.responses[200] = {description: "Favorito Eliminado", }  
          #swagger.responses[404] = {description: "Favorito no encontrado", }  
          #swagger.security = [{"bearerAuth": [] }]            
         */
 
 } );


export { router };

