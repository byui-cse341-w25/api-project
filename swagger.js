const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My Personal API documentation",
      version: "1.0.0",
      description: "API documentation for my Node.js application",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
      {
        url: "https://api-project-r1fz.onrender.com",
        description: "Production server",
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to the API routes
};
const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
