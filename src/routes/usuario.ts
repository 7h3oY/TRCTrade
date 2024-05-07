import { Router } from "express";
import UsuarioCtrl from "../controllers/usuario";
import { checkJwt } from "../middleware/session";
const router = Router();
router.get("/", (req, res) => { res.json("Usuarios"); 
// #swagger.ignore = true } 
});

router.get("/Listar",checkJwt, UsuarioCtrl.Listar, ()=> {    
    
    /*       #swagger.auto = false    
             #swagger.path = '/usuario/Listar'           
             #swagger.tags = ['usuario']  
            #swagger.responses[200] = {
                description: "Retorna todos los usuario",
                content: {
                    "application/json": {
                        schema:{  
                            $ref: "#/components/schemas/Usuario",
                        }
                    }           
                }
            } 
           #swagger.security = [{"bearerAuth": [] }]
         
    */
 } );
 router.get("/:id",checkJwt,  UsuarioCtrl.Datos, ()=> {     
    /*       #swagger.auto = false    
             #swagger.path = '/usuario/{id}'           
             #swagger.tags = ['usuario']  
            #swagger.parameters['id'] = { 
                description: 'Id del usuario',
                required: true,
                type: 'integer',  
                in: 'path'                       
           }    
            #swagger.responses[200] = {
                description: "Detalle usuario",
                content: {
                    "application/json": {
                        schema:{ $ref: "#/components/schemas/Usuario" }
                    }           
                }
            } 
               #swagger.responses[404] = {description: "Usuario no encontrado", }   
               #swagger.security = [{"bearerAuth": [] }]

    */
 } );

router.post("/Crear",checkJwt, UsuarioCtrl.Crear, ()=> {     
   /*  #swagger.auto = false    
            #swagger.path = '/usuario/Crear'           
            #swagger.tags = ['usuario']
            #swagger.requestBody = {
                description: 'Crear nuevo  usuario',   
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/NuevoUsuario" 
                        }  
                    }
                }
            }
            #swagger.responses[422] = {description: "El Usuario ya existe", }  
            #swagger.security = [{"bearerAuth": [] }]
      
     */

} );
router.put("/:id",checkJwt,UsuarioCtrl.Actualizar, ()=> {     
    /*  #swagger.auto = false    
             #swagger.path = '/usuario/{id}'           
             #swagger.tags = ['usuario']
             #swagger.parameters['id'] = { 
                description: 'Id del usuario',
                required: true,
                type: 'integer',  
                in: 'path'  
             }    
             #swagger.requestBody =  {            
             description: 'Actualizar   usuario',
             required: true,
             schema: {
                $ref: "#/components/schemas/ActualizarUsuario"  
             }
         }  
         #swagger.responses[422] = {description: "Datos duplicados de otro usuario", }  
          #swagger.responses[404] = {description: "Usuario no encontrado", }  
          #swagger.security = [{"bearerAuth": [] }]            
         */
 
 } );

 router.delete("/:id",checkJwt,UsuarioCtrl.Borrar, ()=> {     
    /*  #swagger.auto = false    
             #swagger.path = '/usuario/{id}'           
             #swagger.tags = ['usuario']
             #swagger.parameters['id'] = { 
                description: 'Id del usuario',
                required: true,
                type: 'integer',  
                in: 'path'  
             }    
             #swagger.requestBody =  {            
             description: 'Eliminar un  usuario',
             required: true,
             
         }  
          #swagger.responses[200] = {description: "Usuario Eliminado", }  
          #swagger.responses[404] = {description: "Usuario no encontrado", }  
          #swagger.security = [{"bearerAuth": [] }]            
         */
 
 } );


export { router };

