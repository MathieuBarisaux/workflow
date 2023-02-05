const newComponentsFlow = require("./tools/newComponentsFlow");
const launchVsCode = require("./tools/launchVsCode");

launchVsCode(process.argv[2]);
newComponentsFlow(process.argv[2]);
