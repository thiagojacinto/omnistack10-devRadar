const { Router } = require('express');

const routes = Router();

routes.post('/users', (request, response) => {
  console.log(request.body);  // Verify body's content
  
  return response.json({ message: 'Hi there, API client!' });
});


module.exports = routes;