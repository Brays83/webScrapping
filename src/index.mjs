import express from 'express'
import swaggerUI from "swagger-ui-express";
import specs from './shared/infrastructure/documetation/openApi/configuration/openApiConfiguration.js'

import dotenv from 'dotenv'

import products from './controller/productsController.js'

dotenv.config();



const app = express();
const port = process.env.PORT;
const version = `/v${process.env.VERSION}/api`;

//Definimos que nuestra aplicacion usara swagger UI
app.use(`${version}/api-docs`, swaggerUI.serve, swaggerUI.setup(specs));

//Definimos nuestras rutas
app.use(`${version}/products`,products)

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`)
})

export default app;
