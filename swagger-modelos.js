function UnSetkey( obj, KeyDelete){
  
    return Object.keys(obj).filter(objKey =>
      objKey !== KeyDelete).reduce((newObj, key) =>
    {
         newObj[key] = obj[key];
          return newObj;
      }, {}
     );
  }
function UnSetkeys( obj, KeysDelete){
    KeysDelete.forEach(element => {
      obj= UnSetkey( obj, element);
    });
     return obj;
   }
const DatosUsuario={
    id :{
      type : "integer",
      format : "int11",
   },
   nivel_usuario :{
      type : "integer",
      format : "int11",
   },
   unombre :{
      type : "string",
      description : "Largo maximo: 100",
   },
   password :{
      type : "string",
      description : "Largo maximo: 100",
   },
   email :{
      type : "string",
      description : "Largo maximo: 100",
   },
   nombre :{
      type : "string",
      description : "Largo maximo: 100",
   },
   apellido_pat :{
      type : "string",
      description : "Largo maximo: 100",
   },
   apellido_mat :{
      type : "string",
      description : "Largo maximo: 100",
   },
   createdAt :{
      type : "string",
      format : "date-time",
   },
   updatedAt :{
      type : "string",
      format : "date-time",
   },
  
  }
  
  
  let NuevoUsuario =UnSetkeys(DatosUsuario,['id','createdAt','updatedAt']);
  let RegistroUsuario =UnSetkeys(NuevoUsuario,['nivel_usuario']);
  let Login= {
   unombre :{
      type : "string",
      description : "Largo maximo: 100",
   },
   password :{
      type : "string",
      description : "Largo maximo: 100",
   },


  }
 let  Usuarios={
   Datos:DatosUsuario,
   Nuevo:NuevoUsuario,
   Registro:RegistroUsuario,
   Login:Login,

}
  const DatosMoto={
         id :{
            type : "integer",
            format : "int11",
      },
      estado :{
            type : "string",
            description : "Largo maximo: 30",
      },
      id_vendedor :{
            type : "integer",
            format : "int11",
      },
      inicio_remate :{
            type : "string",
            format : "date-time",
      },
      fin_remate :{
            type : "string",
            format : "date-time",
      },
      marca :{
            type : "integer",
            format : "int11",
      },
      modelo :{
            type : "string",
            description : "Largo maximo: 100",
      },
      ano :{
            type : "integer",
            format : "int11",
      },
      kilometraje :{
            type : "",
      },
      duenos :{
            type : "integer",
            format : "int11",
      },
      comuna :{
            type : "integer",
            format : "int11",
      },
      factura :{
            type : "string",
            description : "Largo maximo: 2",
      },
      precio_minimo :{
            type : "integer",
            format : "int11",
      },
      createdAt :{
            type : "string",
            format : "date-time",
      },
      updatedAt :{
            type : "string",
            format : "date-time",
      },
 
 }
 let NuevaMoto =UnSetkeys(DatosMoto,['id','createdAt','updatedAt']);
let Motos={
   Datos:DatosMoto,
   Nueva:NuevaMoto,
 

}

const DatosPuja={
   id :{
      type : "integer",
      format : "int11",
  },
  id_moto :{
      type : "integer",
      format : "int11",
  },
  id_pujador :{
      type : "integer",
      format : "int11",
  },
  monto :{
      type : "integer",
      format : "int11",
  },
  createdAt :{
      type : "string",
      format : "date-time",
  },
  updatedAt :{
      type : "string",
      format : "date-time",
  },
  
 }
 let NuevaPuja =UnSetkeys(DatosPuja,['id','createdAt','updatedAt']);
 let Pujas={
   Datos:DatosPuja,
   Nueva:NuevaPuja,
}

const DatosFavorito={
   id :{
      type : "integer",
      format : "int11",
  },
  id_moto :{
      type : "integer",
      format : "int11",
  },
  id_usuario :{
      type : "integer",
      format : "int11",
  },
  createdAt :{
      type : "string",
      format : "date-time",
  },
  updatedAt :{
      type : "string",
      format : "date-time",
  },
  
 }
 let NuevoFavorito =UnSetkeys(DatosFavorito,['id','createdAt','updatedAt']);
 
 let Favoritos={
   Datos:DatosFavorito,
   Nueva:NuevoFavorito,
}

const DatosCiudad={
   id :{
      type : "integer",
      format : "int11",
  },
  tipo :{
   type : "string",
   
},
nombre :{
   type : "string",

},
sigla :{
   type : "string",
   
},
id_padre :{
   type : "integer",
   format : "int11",
},
  
 }




 module.exports = {
   Usuarios,
   Motos,
   Pujas,
   Favoritos,
   DatosCiudad
	
};


