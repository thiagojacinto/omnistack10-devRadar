export default function convertStringToArray(stringArray) {
  return stringArray.split(',').map(tech => tech.trim());
};