import cors from "cors";
import "dotenv/config";
import express from "express";
import { create } from "express-handlebars";

import cookieParser from "cookie-parser";
import * as path from "path";
import swaggerui from "swagger-ui-express";
import sequelize from "./db/conexion";
import { router } from "./routes";
import postRoutes from "./routes/postRoutes";
import viewsRoutes from "./routes/viewRoutes";
import helpers from "./utils/helpers";
import swaggerSpec from "./utils/swagger";



const PUERTO = process.env.PUERTO ?? 3001;
let PORT = process.env.PUERTO ?? "";
if(PUERTO)PORT=":"+PUERTO;
const DOMINIO = process.env.DOMINIO ?? "http://localhost";
const RUTA = process.env.RUTA ?? "";
const URL_BASE=`${DOMINIO}${PUERTO}${RUTA}/`;
export default URL_BASE;
const app = express();


app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(router);
app.get(RUTA+"api/v1", (req, res) => { 
	res.json("Backend v1"); 
	// #swagger.ignore = true } 
})

const hbs = create({
    partialsDir: [path.resolve(__dirname, "./views/partials")],
	helpers: helpers,
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

app.use(RUTA+"/api-docs", swaggerui.serve, swaggerui.setup(swaggerSpec));

async function connectionDB() {
	try {
		await sequelize.sync();
	} catch (error) {
		console.log(error);
	}
}
connectionDB();
app.listen(PUERTO, () => console.log(`Listo por el puerto ${PUERTO}`));

app.use(RUTA, viewsRoutes); 
app.use(RUTA+"/Post", postRoutes);
app.use(RUTA+"/resources", express.static(path.resolve(__dirname, "../resources")));


