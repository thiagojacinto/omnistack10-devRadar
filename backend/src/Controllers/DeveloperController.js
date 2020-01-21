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

  // Finds all developers:
  async index(req, res) {
    const developers = await Developer.find();

    return res.json(developers);
  },

  // Creates a new dev:
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
  },

  // EXTRA METHODS - Challenges

  // async update()
  async update(request, response) {

    const result = Developer.findByIdAndUpdate(
      request.params.id,
      request.body,
      {new: true},
      // Callback function
      (error, dev) => {
        if (error) return response.status(500).send(error);
        // message of update
        var message = dev ? 
          `Dev ${Developer.name}'s info updated.`
          : `Developer not found.`;

        // Return a message & dev`s info IF IT WAS UPDATE CORRECTLY
        return response.send({message, dev});
      }
    );
      
  },

  // async destroy()
  async destroy(request, response) {
    // Gets username as input parameter 
    const { username } = request.query;
    
    // then looks for this dev`s username to delete
    const devToRemove = await Developer.findOneAndRemove({
      github_username: {
        $in: username
      }
    });

    return response.json(devToRemove);
  },

  // Find by ID and show it:
  async show(request, response) {
    const result = Developer.findById(
      request.params.id,
      // Callback function
      (error, dev) => {
        if (error) return response.status(500).send(error);

        // Return found developer
        return response.status(200).send(dev);
      }
    );

  }

};