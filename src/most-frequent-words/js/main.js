const { mostFrequentWords } = require("./solution.js")
var argv = process.argv.slice(2);
var text = argv[0];
mostFrequentWords(text);
