const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});
const Modelos=require ("./swagger-modelos.js");
require ("dotenv/config");
let Data= require('./package.json');

let PUERTO = process.env.PUERTO ?? "";
if(PUERTO)PUERTO=":"+PUERTO;
const DOMINIO = process.env.DOMINIO ?? "http://localhost";
const RUTA = process.env.RUTA ?? "/";
const doc = {
  info: {
    title: 'API '+Data.name,
    description: 'Description'
  },
  servers: [
    {
      url: `${DOMINIO}${PUERTO}${RUTA}/api/v1/` ,              // by default: 'http://localhost:3000' `Listo por el puerto ${PUERTO}` 'http://localhost:${PUERTO}/api/v1/'
      description: ''       // by default: ''
    },
    // { ... }
  ],
  components:{
    '@schemas': {
      RegistroUsuario: {
        type: 'object',
        properties: Modelos.Usuarios.Registro, 
      },
      Login: {
        type: 'object',
        properties: Modelos.Usuarios.Login, 
      },
        Usuario: {
            type: 'object',
            properties:Modelos.Usuarios.Datos, 
        },
        NuevoUsuario: {
          type: 'object',
          properties: Modelos.Usuarios.Nuevo, 
      },
      ActualizarUsuario: {
        type: 'object',
        properties: Modelos.Usuarios.Nuevo, 
      },
      Ciudad: {
        type: 'object',
        properties: Modelos.DatosCiudad, 
      },
      Moto: {
        type: 'object',
        properties: Modelos.Motos.Datos, 
      },
      NuevaMoto: {
        type: 'object',
        properties: Modelos.Motos.Nueva, 
      },
      ActualizarMoto: {
        type: 'object',
        properties: Modelos.Motos.Nueva, 
      },
      Favorito: {
        type: 'object',
        properties: Modelos.Favoritos.Datos, 
      },
      NuevoFavorito: {
        type: 'object',
        properties: Modelos.Favoritos.Nueva, 
      },
      ActualizarFavorito: {
        type: 'object',
        properties: Modelos.Favoritos.Nueva, 
      },
      Puja: { 
        type: 'object',
        properties: Modelos.Pujas.Datos,
        },
        NuevaPuja: {
        type: 'object',
        properties: Modelos.Pujas.Nueva, 
        },
        ActualizarPuja: {
        type: 'object',
        properties: Modelos.Pujas.Nueva, 
        },
    },
    securitySchemes:{
      bearerAuth: {
          type: 'http',
          scheme: 'bearer'
      }
  }
},
 
};


const outputFile = './src/utils/swagger.json';
const routes = ['./src/app.ts','./src/routes/auth.ts','./src/routes/usuario.ts','./src/routes/ciudad.ts','./src/routes/moto.ts','./src/routes/puja.ts','./src/routes/favorito.ts'];
console.log(routes);

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */
/* NOTA: Si está utilizando el Express Router, debe pasar en las 'rutas' sólo el 
archivo raíz donde se inicia la ruta, como index.js, app.js, routes.js, etc ... */
swaggerAutogen(outputFile, routes, doc);