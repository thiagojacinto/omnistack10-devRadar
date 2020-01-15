const axios = require('axios');
const Developer = require('../Models/Developer');
const convertStringToArray = require('../utils/convertStringToArray');

// CONTROLLER FUNCTIONS: 
// - index:   list of items;
// - show:    shows one item only;
// - store:   create a new item;
// - update:  updates item's info;
// - destroy: remove an item from DB.

module.exports = {
  async store(request, response) {
    // console.log(request.body);  // Verify body's content
    const { github_username, techs, longitude, latitude } = request.body;

    const dev = await Developer.findOne({ github_username });

    if (!dev) {   // Stops duplication of same username

      const githubData = await axios.get(`https://api.github.com/users/${github_username}`);
      // console.log(githubData.data); // Verify data from GitHub API
      
      // Gets data from API, with name being login if name is undefined:
      const { name = login, avatar_url, bio } = githubData.data;
      // console.log(name, avatar_url, bio, github_username);  // Verify
      
      const techsArray = convertStringToArray(techs);
      
      const location = {
        type: 'Point',
        coordinates : [longitude, latitude],
      };
      
      const dev = await Developer.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    }
      
    return response.json(dev);
  }
};