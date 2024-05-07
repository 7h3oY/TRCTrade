import { Request, Response } from "express";
import { loginUsuario, registroUsuario } from "../services/auth";

const registroCtrl = async ({ body }: Request, res: Response) => {
  console.log();
  const respuesta = await registroUsuario(body);

  if (respuesta === "ALREADY_unombre" || respuesta === "ALREADY_email" ) {
    res.status(422);
    res.send("El usuario Existe");
  } else {
    res.send(respuesta);
  }


};

const loginCtrl = async ({ body }: Request, res: Response) => {


      const { unombre, password } = body;
      if(unombre && password){
      const responseUser:any = await loginUsuario({ unombre, password });
       

      if (responseUser === "PASSWORD_INCORRECT") {
        res.status(403);
        res.send(responseUser);
      } else {

        let token=responseUser.token;

        const cookieOption = {
          expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
          path: "/"
        }
        res.cookie("jwt",token,cookieOption);
        res.send(responseUser);
      }

    }else {

      res.status(403);
      res.send("CREDENCIALES_NO_VALIDAS");
    }


};

export { loginCtrl, registroCtrl };

