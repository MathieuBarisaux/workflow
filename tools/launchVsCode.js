const { exec } = require("child_process");

const launchVsCode = (path) => {
  console.log(path);

  exec(`code ${path}`, (error) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
  });
};

module.exports = launchVsCode;
