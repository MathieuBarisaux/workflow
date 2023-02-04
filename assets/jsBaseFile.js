const upperFirstLetter = require("../utils/upperFirstLetter");

const jsBaseFile = (dirName) => {
  const upperDirName = upperFirstLetter(dirName);

  return `import styles from "./${upperDirName}.module.scss";

const ${upperDirName} = () => {

  return (
    <div className={styles.${upperDirName}}>
    </div>
  );
};

export default ${upperDirName};`;
};

module.exports = jsBaseFile;
