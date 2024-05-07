import { Auth } from "../interfaces/auth.interface";
import { Usuario } from "../interfaces/usuario.interface";
import UsuarioModel from "../models/usuario";
import { encrypt, verified } from "../utils/bcrypt.handle";

import { generateToken } from "../utils/jwt.handle";

const registroUsuario = async ( body: Usuario) => {
  
  const checkUnombre = await UsuarioModel.findOne({ where: { unombre: body.unombre} });
  if (checkUnombre) return "ALREADY_unombre";
  const checkEmail = await UsuarioModel.findOne({ where: { email: body.email } });
  if (checkEmail) return "ALREADY_email";

  const passHash = await encrypt(body.password); 
  body.password=passHash;
  let nuevoUsuario = await UsuarioModel.create( {
    nivel_usuario : 0,
    unombre : body.unombre,
    password : body.password,
    email : body.email,
    nombre : body.nombre,
    apellido_pat : body.apellido_pat,
    apellido_mat : body.apellido_mat,

  });
  return nuevoUsuario.dataValues;
};

const loginUsuario = async ({ unombre, password }: Auth) => {
    const UserDB: any = await UsuarioModel.findOne({raw:true, where: {unombre:unombre} });
  if (!UserDB) return "NOT_FOUND_USER";
 const isCorrect = await verified(password, UserDB.password);
  if (!isCorrect) return "PASSWORD_INCORRECT";
  
  const token = generateToken(UserDB.id, UserDB.nivel_usuario);
  const data = {
    token,
    user: UserDB,
  };
  
  return data;
};

export { loginUsuario, registroUsuario };

