import { Auth } from "./auth.interface";
export interface Usuario extends Auth {	
	nivel_usuario : number;	
	email : string;
	nombre : string;
	apellido_pat : string;
	apellido_mat : string;	
}
