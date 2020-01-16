const { Router } = require('express');

const DeveloperController = require('./Controllers/DeveloperController');
const SearchController = require('./Controllers/SearchController');

const routes = Router();

// Creates a new developers
routes.post('/v1/devs', DeveloperController.store);
// Get all developers
routes.get('/v1/devs', DeveloperController.index);

// Search a specific developer within radius 10 km:
routes.get('/v1/searchdev', SearchController.index);

module.exports = routes;