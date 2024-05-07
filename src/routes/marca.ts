import { Router } from "express";
import MarcaCtrl from "../controllers/marca";
import { checkJwt } from "../middleware/session";
const router = Router();
router.get("/", (req, res) => { res.json("Marcas"); 
// #swagger.ignore = true } 
});

router.get("/Listar",checkJwt, MarcaCtrl.Listar, ()=> {    
    
    /*       #swagger.auto = false    
             #swagger.path = '/marca/Listar'           
             #swagger.tags = ['marca']  
            #swagger.responses[200] = {
                description: "Retorna todas las marcas",
                content: {
                    "application/json": {
                        schema:{  
                            $ref: "#/components/schemas/Marca",
                        }
                    }           
                }
            } 
           #swagger.security = [{"bearerAuth": [] }]
         
    */
 } );
 router.get("/:id",checkJwt,  MarcaCtrl.Datos, ()=> {     
    /*       #swagger.auto = false    
             #swagger.path = '/marca/{id}'           
             #swagger.tags = ['marca']  
            #swagger.parameters['id'] = { 
                description: 'Id de la  marca',
                required: true,
                type: 'integer',  
                in: 'path'                       
           }    
            #swagger.responses[200] = {
                description: "Detalle marca",
                content: {
                    "application/json": {
                        schema:{ $ref: "#/components/schemas/Marca" }
                    }           
                }
            } 
               #swagger.responses[404] = {description: "Marca no encontrado", }   
               #swagger.security = [{"bearerAuth": [] }]

    */
 } );

router.post("/Crear",checkJwt, MarcaCtrl.Crear, ()=> {     
   /*  #swagger.auto = false    
            #swagger.path = '/marca/Crear'           
            #swagger.tags = ['marca']
            #swagger.requestBody = {
                description: 'Crear nueva  marca',   
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/NuevaMarca" 
                        }  
                    }
                }
            }
            #swagger.responses[422] = {description: "El Marca ya existe", }  
            #swagger.security = [{"bearerAuth": [] }]
      
     */

} );
router.put("/:id",checkJwt,MarcaCtrl.Actualizar, ()=> {     
    /*  #swagger.auto = false    
             #swagger.path = '/marca/{id}'           
             #swagger.tags = ['marca']
             #swagger.parameters['id'] = { 
                description: 'Id de la marca',
                required: true,
                type: 'integer',  
                in: 'path'  
             }    
             #swagger.requestBody =  {            
             description: 'Actualizar   marca',
             required: true,
             schema: {
                $ref: "#/components/schemas/ActualizarMarca"  
             }
         }  
          
          #swagger.responses[404] = {description: "Marca no encontrada", }  
          #swagger.security = [{"bearerAuth": [] }]            
         */
 
 } );

 router.delete("/:id",checkJwt,MarcaCtrl.Borrar, ()=> {     
    /*  #swagger.auto = false    
             #swagger.path = '/marca/{id}'           
             #swagger.tags = ['marca']
             #swagger.parameters['id'] = { 
                description: 'Id de la marca',
                required: true,
                type: 'integer',  
                in: 'path'  
             }    
             #swagger.requestBody =  {            
             description: 'Eliminar una  marca',
             required: true,
             
         }  
          #swagger.responses[200] = {description: "Marca Eliminada", }  
          #swagger.responses[404] = {description: "Marca no encontrada", }  
          #swagger.security = [{"bearerAuth": [] }]            
         */
 
 } );


export { router };

