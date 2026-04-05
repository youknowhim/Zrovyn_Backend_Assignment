const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/finance", require("./routes/financeRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));

module.exports = app;