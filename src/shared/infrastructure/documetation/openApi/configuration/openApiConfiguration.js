import swaggerJSDoc from "swagger-jsdoc"

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Api for the best price',
        version: '0.0.1',
        contact: {
          name: 'Brayan Smith Morales Quispe',
          email: 'brayanmq12@gmail.com'
        },
        servers: {
            url: 'http://localhost:3000',
            description: 'Local Server'
        }
            }
    },
    apis: ['./controllers/routes/*.js']
};

const specs = swaggerJSDoc(options);
export default specs;
  