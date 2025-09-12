import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Title',
      version: '1.0.0',
      description: 'API documentation',
    },
  },
  apis: ['./src/**/*.ts'], // Path to your route files
};

const swaggerSpec = swaggerJSDoc(options);

// module.exports = swaggerSpec;
export default swaggerSpec;