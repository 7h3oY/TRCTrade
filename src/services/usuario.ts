import ConsultasDB from "../db/consultas";
import { Usuario } from "../interfaces/usuario.interface";
import UsuarioModel from "../models/usuario";
import { encrypt } from "../utils/bcrypt.handle";


async function DataUsuario(idUsuario:number){
  const Usuario: any = await UsuarioModel.findOne({raw:true, where: { id: idUsuario}  });
  return Usuario;
 }   
  const Crear = async ( body: Usuario) => {
  
    const checkUnombre = await UsuarioModel.findOne({ where: { unombre: body.unombre}  });

    if (checkUnombre) return "ALREADY_unombre";
    const checkEmail = await UsuarioModel.findOne({ where: { email: body.email } });
    if (checkEmail) return "ALREADY_email";
  
    const passHash = await encrypt(body.password); 
    body.password=passHash;
    let nuevoUsuario = await UsuarioModel.create( {
      nivel_usuario : body.nivel_usuario,
      unombre : body.unombre,
      password : body.password,
      email : body.email,
      nombre : body.nombre,
      apellido_pat : body.apellido_pat,
      apellido_mat : body.apellido_mat,
  
    });
    return nuevoUsuario.dataValues;
  };
  const  Actualizar = async (body: Usuario, idUsuario:number )=> {

    const Usuario = await DataUsuario(idUsuario);
    
   
   if(!Usuario) return "USUARIO_NO_EXISTE";
    
   const checkUnombre = await ConsultasDB.Unico( "usuarios" , " id != "+idUsuario+" AND ( unombre='"+body.unombre+"' OR email='"+body.email+"' )",UsuarioModel );

    if (checkUnombre) {
      return "ALREADY_unombre";
    }
    else{
      console.log("actualizando");
      const passHash = await encrypt(body.password); 
      let UsuarioActualizado = await UsuarioModel.update( {
        nivel_usuario : body.nivel_usuario,
        unombre : body.unombre,
        password : passHash,
        email : body.email,
        nombre : body.nombre,
        apellido_pat : body.apellido_pat,
        apellido_mat : body.apellido_mat,
    
      },{ where: { id: idUsuario } }  );
      return UsuarioActualizado;
    }

  }
  const Listar = async ()=> {
  
    const ListaUsuarios = await UsuarioModel.findAll( {raw:true});
    return ListaUsuarios
    
  };
   
  
  const DatosUsuario = async (idUsuario:number) => {
    console.log(idUsuario);
    const Usuario = await DataUsuario(idUsuario);
    
     if(Usuario){
       return Usuario;
     }else{
      return "USUARIO_NO_EXISTE";
     }
  }
  const Borrar = async (idUsuario:number) => {

        try {
          await UsuarioModel.destroy({ where: { id:idUsuario } })
          return "USUARIO_ELIMINADO";
      } catch (error) {
          return "ERROR_AL_ELIMINAR";
      }
        
  }

  
  const UsuarioServicio = {
    Crear,
    Actualizar,
    DatosUsuario,
    Listar,
    Borrar
  };

 
export  default UsuarioServicio;
