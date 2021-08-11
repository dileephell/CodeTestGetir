const express = require('express');
const typeValidator = require('./middleware/typeChecker');
const queryMatcherAndFilter = require('./controller/dbQueryController');

// cache app
const app = express();

// parse raw text requests in JSON
app.use(express.json());

// use route
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 */
app.post('/api', typeValidator, queryMatcherAndFilter);

module.exports = app;
