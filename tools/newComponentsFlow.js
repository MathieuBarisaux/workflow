// Dependencies
const chokidar = require("chokidar");
const fs = require("fs");

// Functions
const upperFirstLetter = require("../utils/upperFirstLetter");

// Assets
const scssBaseFile = require("../assets/scssBaseFile");
const jsBaseFile = require("../assets/jsBaseFile");

const newComponentsFlow = (globalDirectory) => {
  const directoryToWatch = globalDirectory + "/src/components";

  const watcher = chokidar.watch(directoryToWatch, {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true,
    ignoreInitial: true,
  });

  watcher.on("addDir", (event) => {
    console.log("📥 =>", event);

    const dirName = event.split("/").pop();
    const upperDirName = upperFirstLetter(dirName);

    /* New SCSS file */
    const scssFilePath = `${event}/${upperDirName}.module.scss`;
    if (!fs.existsSync(scssFilePath)) {
      fs.writeFile(scssFilePath, scssBaseFile(dirName), (err) => {
        if (err) throw err;
      });
    }

    /* New JS file */
    const jsFilePath = `${event}/${upperDirName}.js`;
    if (!fs.existsSync(jsFilePath)) {
      fs.writeFile(jsFilePath, jsBaseFile(dirName), (err) => {
        if (err) throw err;
      });
    }
  });
};

module.exports = newComponentsFlow;
