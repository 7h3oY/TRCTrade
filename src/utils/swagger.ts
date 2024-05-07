import path from "path";
import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options={
    
    swaggerDefinition: {
        ...require('./swagger.json')
    },
    
    
    apis:[`${path.join(__dirname,'./routes/*')}`],
}


const  swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec