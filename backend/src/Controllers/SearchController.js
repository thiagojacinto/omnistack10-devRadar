const Developer = require('../Models/Developer');
const convertStringToArray = require('../utils/convertStringToArray');

module.exports = {
  async index(request, response) {

    // console.log(req.query); // Verify query params
    const { latitude, longitude, techs } = request.query;

    const techArray = convertStringToArray(techs);
    
    const devs = await Developer.find({
      // Filter by techs
      techs: {
        $in: techArray
    },
    location: {
        $near: {
            $geometry: {
                type: 'Point',
                coordinates: [longitude, latitude]
            },
            $maxDistance: 10000
        }
    }
    })
  
    return response.json(devs);
  }
}