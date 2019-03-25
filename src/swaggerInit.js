import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    info: {
      description: 'Serve data from insurance API',
      title: 'Insurance API',
      version: '0.0.0',
    },
    securityDefinitions: {
      Secret:
        {
          type: 'apiKey',
          name: 'x-auth-secret',
          in: 'header',
        },
      Email: {
        type: 'apiKey',
        name: 'email',
        in: 'header',
      },
    },
    basePath: '',
  },
  apis: ['./*/routes/routesDefinition.js'],
  swagger: '2.0',
};

const swaggerSpec = swaggerJsDoc(options);

const swaggerInit = app => {
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default swaggerInit;
