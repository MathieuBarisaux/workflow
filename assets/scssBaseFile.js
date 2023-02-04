const upperFirstLetter = require("../utils/upperFirstLetter");

const scssBaseFile = (dirName) => {
  return `@use "/src/variables";
  
.${upperFirstLetter(dirName)} {

}`;
};

module.exports = scssBaseFile;
