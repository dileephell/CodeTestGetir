const http = require('http');
const app = require('./app');
const db = require('./database');
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');
const PORT = process.env.PORT || 3333;

const server = http.createServer(app);
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);
async function startServer() {
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
