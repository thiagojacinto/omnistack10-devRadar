const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/v1/devs', async (request, response) => {
  // console.log(request.body);  // Verify body's content
  const { github_username } = request.body;

  const githubData = await axios.get(`https://api.github.com/users/${github_username}`);
  // console.log(githubData.data); // Verify data from GitHub API

  // Gets data from API, with name being login if name is undefined:
  const { name = login, avatar_url, bio }
  console.log(name, avatar_url, bio, github_username);
  
  return response.json({ message: 'Hi there, API client!' });
});

module.exports = routes;