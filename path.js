const path = require("path");

// This will give me the file path
module.exports = path.dirname(process.mainModule.filename);