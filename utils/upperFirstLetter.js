const upperFirstLetter = (str) => {
  if (str) {
    let newStr;

    newStr = str.charAt(0).toUpperCase() + str.substring(1);

    return newStr;
  } else {
    return null;
  }
};

module.exports = upperFirstLetter;
