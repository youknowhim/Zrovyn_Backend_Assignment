const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Finance Backend API",
      version: "1.0.0",
      description: "API documentation for Finance Dashboard Backend",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"], // where your docs are written
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;