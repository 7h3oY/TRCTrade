import { Router } from "express";
import MotoCtrl from "../controllers/moto";
import { checkJwt } from "../middleware/session";
const router = Router();
router.get("/", (req, res) => { res.json("Motos"); 
// #swagger.ignore = true } 
});

router.get("/Listar",checkJwt, MotoCtrl.Listar, ()=> {    
    
    /*       #swagger.auto = true    
             #swagger.path = '/moto/Listar'           
             #swagger.tags = ['moto']  
            #swagger.responses[200] = {
                description: "Retorna todas las motos",
                content: {
                    "application/json": {
                        schema:{  
                            $ref: "#/components/schemas/Moto",
                        }
                    }           
                }
            } 
           #swagger.security = [{"bearerAuth": [] }]
         
    */
 } );
 router.get("/ListarPorEstado:estado",checkJwt, MotoCtrl.Listar, ()=> {    
    
    /*       #swagger.auto = false    
             #swagger.path = '/moto/ListarPorEstado/{estado}'           
             #swagger.tags = ['moto']  
              #swagger.parameters['estado'] = { 
                description: 'Estado de la  moto',
                required: true,
                type: 'string',  
                in: 'path'                       
           }    
            #swagger.responses[200] = {
                description: "Retorna todas las motos con dicho estado",
                content: {
                    "application/json": {
                        schema:{  
                            $ref: "#/components/schemas/Moto",
                        }
                    }           
                }
            } 
           #swagger.security = [{"bearerAuth": [] }]
         
    */
 } );
 router.get("/:id",checkJwt,  MotoCtrl.Datos, ()=> {     
    /*       #swagger.auto = false    
             #swagger.path = '/moto/{id}'           
             #swagger.tags = ['moto']  
            #swagger.parameters['id'] = { 
                description: 'Id de la  moto',
                required: true,
                type: 'integer',  
                in: 'path'                       
           }    
            #swagger.responses[200] = {
                description: "Detalle moto",
                content: {
                    "application/json": {
                        schema:{ $ref: "#/components/schemas/Moto" }
                    }           
                }
            } 
               #swagger.responses[404] = {description: "Moto no encontrado", }   
               #swagger.security = [{"bearerAuth": [] }]

    */
 } );

router.post("/Crear",checkJwt, MotoCtrl.Crear, ()=> {     
   /*  #swagger.auto = false    
            #swagger.path = '/moto/Crear'           
            #swagger.tags = ['moto']
            #swagger.requestBody = {
                description: 'Crear nueva  moto',   
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/NuevaMoto" 
                        }  
                    }
                }
            }
            #swagger.responses[422] = {description: "El Moto ya existe", }  
            #swagger.security = [{"bearerAuth": [] }]
      
     */

} );
router.put("/:id",checkJwt,MotoCtrl.Actualizar, ()=> {     
    /*  #swagger.auto = false    
             #swagger.path = '/moto/{id}'           
             #swagger.tags = ['moto']
             #swagger.parameters['id'] = { 
                description: 'Id de la moto',
                required: true,
                type: 'integer',  
                in: 'path'  
             }    
             #swagger.requestBody =  {            
             description: 'Actualizar   moto',
             required: true,
             schema: {
                $ref: "#/components/schemas/ActualizarMoto"  
             }
         }  
          
          #swagger.responses[404] = {description: "Moto no encontrada", }  
          #swagger.security = [{"bearerAuth": [] }]            
         */
 
 } );

 router.delete("/:id",checkJwt,MotoCtrl.Borrar, ()=> {     
    /*  #swagger.auto = false    
             #swagger.path = '/moto/{id}'           
             #swagger.tags = ['moto']
             #swagger.parameters['id'] = { 
                description: 'Id de la moto',
                required: true,
                type: 'integer',  
                in: 'path'  
             }    
             #swagger.requestBody =  {            
             description: 'Eliminar una  moto',
             required: true,
             
         }  
          #swagger.responses[200] = {description: "Moto Eliminada", }  
          #swagger.responses[404] = {description: "Moto no encontrada", }  
          #swagger.security = [{"bearerAuth": [] }]            
         */
 
 } );


export { router };

