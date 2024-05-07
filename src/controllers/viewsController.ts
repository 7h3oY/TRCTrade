import { Request, Response } from "express";
import * as formidable from "formidable";
import * as fs from "fs";
import moment from "moment";
import * as path from "path";
import { RequestExt } from "../interfaces/req-ext";
import CiudadServicio from "../services/ciudad";
import FavoritoServicio from "../services/favorito";
import MarcaServicio from "../services/marca";
import ServicioMoto from "../services/moto";
import PujaServicio from "../services/puja";
import UsuarioServicio from "../services/usuario";

moment.locale("es");
function limpiarCampos(Filds: any){

 let Campos :any=[];
for (const key in Filds) {
      
       Campos[key]=Filds[key][0];  
}
return (Campos);

}
const home = async (req: RequestExt, res: Response) => {
  
    let idUser=req.user?.id;

    if(!idUser){
        res.redirect("/Motos/login");
        return false;
        
    } 
    const postMotos: any[] =  await ServicioMoto.ListarPorEstado("abierto" );
    const postPujas: any[] = await PujaServicio.Listar();
    const ciudades: any[] = await CiudadServicio.ListarComunas();
    const favoritos: any[] = await FavoritoServicio.ListarPorUsuario(idUser);
    const chileAutos: any[]= await ServicioMoto.chileAutos();
    const marcas: any = await MarcaServicio.Listar();
    const motosPujas = [];
    for(const motoPujada of postMotos){
        let montoPagado = 0;
        const pujas = postPujas.filter((puja: { id_moto: any; }) => puja.id_moto === motoPujada.id);
        const favMoto = favoritos.find((favorito: { id_moto: any; }) => favorito.id_moto === motoPujada.id);
        let marcaString = marcas.find((marca: { id: any; }) => marca.id === motoPujada.marca).nombre;
        motoPujada.nombreMarca = marcaString;
        let fechaInicial = moment(motoPujada.inicio_remate);
        let fechaFinal = moment(motoPujada.fin_remate);
        //motoPujada.fin_remate = fechaFinal.format("DD-MM-YYYY:hh:mm:ss");
        motoPujada.inicio_remate = fechaInicial.format("DD-MM-YYYY");

        if(pujas.length > 0){
            for(const puja of pujas){
                montoPagado += puja.monto;
            }
            let itemMoto = {
                moto : motoPujada,
                montoPuja : montoPagado,
                favorito : favMoto
            }
            motosPujas.push(itemMoto);
        }else{
            let itemMoto = { 
                moto : motoPujada,
                montoPuja : 0,
                favorito : favMoto
            }
            motosPujas.push(itemMoto);
        } 
        
      
        
    }

    res.render('home', {
        postMotos: motosPujas, 
        ciudades,
        chileAutos,
        marcas
    });
};




const login = (req: Request, res: Response) => {
    res.render("login");     
};

const registro = (req: Request, res: Response) => { 
    res.render("registro");
}; 
const subastar = async (req: Request, res: Response) => {
    const marcas =  await MarcaServicio.Listar();
    const ciudades = await CiudadServicio.ListarComunas();
    
    res.render('subastas', {marcas, ciudades});
 };
 

function subirArchivo(Archivo:any,carpetaFinal:string, nombreArchivo:any ){    
    const extension = Archivo.mimetype.split("/")[1];
     fs.mkdirSync(carpetaFinal,{recursive:true});   
     let arch=`${nombreArchivo}.${extension}`;
     const rutaFinal= `${carpetaFinal}/${arch}`;
   
     fs.renameSync(Archivo.filepath, rutaFinal);
     return  arch;
}

const EditarSubasta = async (req: Request, res: Response) => {   
     const form= new formidable.IncomingForm();
     form.parse(req, async (err, fields, files) => {  
       let Campos=limpiarCampos(fields);       
      
       let NuevaMoto:any; 
         if(Campos.id>0){
            NuevaMoto = await  ServicioMoto.Actualizar(Campos, Campos.id); 
         }else{
           NuevaMoto = await  ServicioMoto.Crear(Campos);
         }
        let idMoto=NuevaMoto.id;
        let file:any = files.imagenP;         
        let carpetaFinal = path.join( __dirname, `../../resources/uploads/${idMoto}`); 
        let Archivo=file[0]; 
        let imagenP = subirArchivo(Archivo,carpetaFinal, "portada" );    
        NuevaMoto.portada=imagenP; 
        let Galeria= files.galeria;
        let i=0;
        let GaleriaDB=[];
       carpetaFinal=carpetaFinal+"/galeria";
        if(Galeria) for (const img of Galeria) {
            
          GaleriaDB[i]=subirArchivo(img,carpetaFinal, i ); 
          i++;   
        }        
        if(GaleriaDB.length>0){   NuevaMoto.galeria=JSON.stringify(GaleriaDB);        }
        await ServicioMoto.Actualizar(NuevaMoto, idMoto);          
        res.redirect("/Motos/home/");    
     });
    
};

const historialPujas = async (req: RequestExt, res: Response) => {
    let idUser=req.user?.id;
    let  user = await UsuarioServicio.DatosUsuario(parseInt(idUser));
    const usuarioPujas :any  = await PujaServicio.ListarPorUsuario(user.id); 
    const motosPujadas :any = await ServicioMoto.Listar();
    const usuarios: any = await UsuarioServicio.Listar(); 
    const historial = [];
    const subastas =[];
    const terminadas =[];
    const motoSubastada = motosPujadas.filter((moto: { id: any; }) => moto.id === user.id);
    for (const puja of usuarioPujas) {
        const motoPujada = motosPujadas.find((moto: { id: any; }) => moto.id === puja.id_moto);   
        const vendedor = usuarios.find((usuario: { id: any; }) => usuario.id === motoPujada.id_vendedor);
        if (motoPujada) {
            const itemHistorial = { 
                usuario: puja.id,
                puja: puja,
                moto: motoPujada,
                vendedor : vendedor,
            };
            historial.push(itemHistorial); 
        }
    }
    for(const subasta of motoSubastada){    
        if(subasta){
            if(subasta.estado == "subastada"){
                const terminada = {
                    moto: subasta,
                    usuario: user
                }
                terminadas.push(terminada);
            }
            const subastada = {
                moto: subasta,
                usuario: user
            };
            subastas.push(subastada);
        }
    }
   
    res.render("historial", { historial: historial, subastas: subastas, terminadas: terminadas });
    
};

const detallePosts = async (req: Request, res: Response) => {
    let idMoto = parseInt(req.params.id); 
    let datos: any = {}; 
    const ciudades: any[] = await CiudadServicio.ListarComunas();
    const marcas: any[] = await MarcaServicio.Listar();
    if(idMoto > 0){
        const moto = await ServicioMoto.DatosMoto(idMoto);
         
           const comunaMoto = ciudades.find((comuna: { id: any; }) => comuna.id === moto.comuna).nombre;
           console.log(comunaMoto);
            moto.comuna = comunaMoto;
            let marcaString = marcas.find((marca: { id: any; }) => marca.id === moto.marca).nombre;
            moto.nombreMarca = marcaString;
            let fechaInicial = moment(moto.inicio_remate);
            let fechaFinal = moment(moto.fin_remate);
            moto.fin_remate = fechaFinal.format("DD-MM-YYYY");
            moto.inicio_remate = fechaInicial.format("DD-MM-YYYY");
       console.log(moto);
        const vendedor = await UsuarioServicio.DatosUsuario(moto.id_vendedor);
        datos = {
            datosMoto: moto,
            vendedor: vendedor
        }
        
    }
    res.render("detalle", { moto: datos });
  
};

const detalleUsuario = async (req: Request, res: Response) => {
  res.render("perfil");
};

const controladores = {
    home,
    login,
    registro,
    subastar,
    detallePosts,
    detalleUsuario,
    historialPujas,
    EditarSubasta
};

export default controladores;