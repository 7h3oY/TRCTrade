import { Router } from "express";
import controladores from "../controllers/viewsController";
import { checkSesion } from "../middleware/session";
const router = Router();
router.get(["/home", "/"],checkSesion, controladores.home); 
router.get(["/login", "/"], controladores.login);
router.get(["/registro", "/"], controladores.registro);
router.get(["/subastar", "/"], controladores.subastar);
router.get(["/perfil", "/"], controladores.detalleUsuario);
router.get(["/historial/", "/"],checkSesion, controladores.historialPujas);
router.get(["/detallemoto/:id", "/"], controladores.detallePosts);



export default router;
