import { Router } from "express";
import { loginCtrl, registroCtrl } from "../controllers/auth";
import FavoritoCtrl from "../controllers/favorito";
import MotoCtrl from "../controllers/moto";
import PujaCtrl from "../controllers/puja";
import controladores from "../controllers/viewsController";

const router = Router();
router.post(["/login", "/"], loginCtrl);
router.post("/registro", (req, res, next) => {
    console.log("Datos de registro recibidos:", req.body); 
    next();
}, registroCtrl);
router.post(["/pujar", "/"], PujaCtrl.Crear);
router.post(["/EditarSubasta", "/"], controladores.EditarSubasta);
router.post(["/addfavorito", "/"], FavoritoCtrl.Crear);
router.post(["/updateUsuario/:id", "/"], FavoritoCtrl.Crear);
router.post(["/finremate/", "/"], MotoCtrl.FinRemate);


export default router;
