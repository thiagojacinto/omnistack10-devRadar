const { Router } = require('express');
const DeveloperController = require('./Controllers/DeveloperController');

const routes = Router();

routes.post('/v1/devs', DeveloperController.store);

module.exports = routes;