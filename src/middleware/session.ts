import { NextFunction, Response } from "express";
import { RequestExt } from "../interfaces/req-ext";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {

  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop(); // 11111
    const isUser = verifyToken(`${jwt}`) as { id: string };


    if (!isUser) {
      res.status(401);
      res.send("NO_TIENES_UN_JWT_VALIDO");
    } else {
      req.user = isUser;
      console.log(req.user);
      next();
    }
  } catch (e) {

    res.status(401);
    res.send("NO_TIENES_UN_JWT_VALIDO");
  }
};

const checkSesion = (req: RequestExt, res: Response, next: NextFunction) => {
  
  try{
    const cookies = req.headers.cookie?.split("; ");
    let Galleta= cookies?.find(cookie => cookie.startsWith("jwt="));
   if(Galleta){ let token=Galleta?.replace("jwt=","");
    const isUser = verifyToken(`${token}`) as { id: string };   
    req.user = isUser;}
  }catch{
    return false;
  }
  next();
  
};

export { checkJwt, checkSesion };

