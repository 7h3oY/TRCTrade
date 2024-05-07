import { Router } from "express";
import { loginCtrl, registroCtrl } from "../controllers/auth";

const router = Router();
router.get("/", (req, res) => { res.json("logueo y registro"); 
// #swagger.ignore = true } 
})
router.post("/registro", registroCtrl, ()=> {  
   
   /*  #swagger.auto = false    
            #swagger.path = '/auth/registro'           
            #swagger.tags = ['auth']

           #swagger.requestBody = {
                description: 'Crear nuevo  usuario',   
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/RegistroUsuario" 
                        }  
                    }
                }
            }
            #swagger.responses[422] = {description: "El Usuario ya existe", }
        }  
    */

} );

router.post("/login", loginCtrl, ()=> {      
    /*  #swagger.auto = false    
        #swagger.path = '/auth/login'           
        #swagger.tags = ['auth']
        #swagger.requestBody =  {            
            description: 'Credenciales del usuario.',
            required: true,
            content: {
                    "application/json": {
                        schema: {
                           $ref: "#/components/schemas/Login" 
                        }  
                    }
                }
           
        }    
            
     */ 
 } );

export { router };

