import { Router } from "express";
import PujaCtrl from "../controllers/puja";
import { checkJwt } from "../middleware/session";
const router = Router();
router.get("/", (req, res) => { res.json("Pujas"); 
// #swagger.ignore = true } 
});

router.get("/Listar",checkJwt, PujaCtrl.Listar, ()=> {    
    
    /*       #swagger.auto = false    
             #swagger.path = '/puja/Listar'           
             #swagger.tags = ['puja']  
            #swagger.responses[200] = {
                description: "Retorna todas las pujas",
                content: {
                    "application/json": {
                        schema:{  
                            $ref: "#/components/schemas/Puja",
                        }
                    }           
                }
            } 
           #swagger.security = [{"bearerAuth": [] }]
         
    */
 } );
 router.get("/ListarPorUsuario/:idUsuario",checkJwt, PujaCtrl.ListarPorUsuario, ()=> {    
    
    /*       #swagger.auto = false    
             #swagger.path = '/puja/ListarPorUsuario/{idUsuario}'           
             #swagger.tags = ['puja']  
            #swagger.responses[200] = {
                description: "Retorna todas las pujas del usuario",
                content: {
                    "application/json": {
                        schema:{  
                            $ref: "#/components/schemas/Puja",
                        }
                    }           
                }
            } 
           #swagger.security = [{"bearerAuth": [] }]
         
    */
 } );
 router.get("/ListarPorMoto/:idMoto",checkJwt, PujaCtrl.ListarPorMoto, ()=> {    
    
    /*       #swagger.auto = false    
             #swagger.path = '/puja/ListarPorMoto/{idMoto}'           
             #swagger.tags = ['puja']  
            #swagger.responses[200] = {
                description: "Retorna todas las pujas de la moto",
                content: {
                    "application/json": {
                        schema:{  
                            $ref: "#/components/schemas/Puja",
                        }
                    }           
                }
            } 
           #swagger.security = [{"bearerAuth": [] }]
         
    */
 } );
 router.get("/:id",checkJwt,  PujaCtrl.Datos, ()=> {     
    /*       #swagger.auto = false    
             #swagger.path = '/puja/{id}'           
             #swagger.tags = ['puja']  
            #swagger.parameters['id'] = { 
                description: 'Id de la  puja',
                required: true,
                type: 'integer',  
                in: 'path'                       
           }    
            #swagger.responses[200] = {
                description: "Detalle puja",
                content: {
                    "application/json": {
                        schema:{ $ref: "#/components/schemas/Puja" }
                    }           
                }
            } 
               #swagger.responses[404] = {description: "Puja no encontrado", }   
               #swagger.security = [{"bearerAuth": [] }]

    */
 } );

router.post("/Crear",checkJwt, PujaCtrl.Crear, ()=> {     
   /*  #swagger.auto = false    
            #swagger.path = '/puja/Crear'           
            #swagger.tags = ['puja']
            #swagger.requestBody = {
                description: 'Crear nueva  puja',   
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/NuevaPuja" 
                        }  
                    }
                }
            }
            #swagger.responses[422] = {description: "El Puja ya existe", }  
            #swagger.security = [{"bearerAuth": [] }]
      
     */

} );
router.put("/:id",checkJwt,PujaCtrl.Actualizar, ()=> {     
    /*  #swagger.auto = false    
             #swagger.path = '/puja/{id}'           
             #swagger.tags = ['puja']
             #swagger.parameters['id'] = { 
                description: 'Id de la puja',
                required: true,
                type: 'integer',  
                in: 'path'  
             }    
             #swagger.requestBody =  {            
             description: 'Actualizar   puja',
             required: true,
             schema: {
                $ref: "#/components/schemas/ActualizarPuja"  
             }
         }  
          
          #swagger.responses[404] = {description: "Puja no encontrada", }  
          #swagger.security = [{"bearerAuth": [] }]            
         */
 
 } );

 router.delete("/:id",checkJwt,PujaCtrl.Borrar, ()=> {     
    /*  #swagger.auto = false    
             #swagger.path = '/puja/{id}'           
             #swagger.tags = ['puja']
             #swagger.parameters['id'] = { 
                description: 'Id de la puja',
                required: true,
                type: 'integer',  
                in: 'path'  
             }    
             #swagger.requestBody =  {            
             description: 'Eliminar una  puja',
             required: true,
             
         }  
          #swagger.responses[200] = {description: "Puja Eliminada", }  
          #swagger.responses[404] = {description: "Puja no encontrada", }  
          #swagger.security = [{"bearerAuth": [] }]            
         */
 
 } );


export { router };

