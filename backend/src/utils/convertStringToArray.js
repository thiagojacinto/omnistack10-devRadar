module.exports = function convertStringToArray(stringArray) {
  return stringArray.split(',').map(tech => tech.trim());
};