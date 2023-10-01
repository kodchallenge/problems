const { mostFrequentWords } = require("./solution.js")
const kod = require("../../runner-lib/js/kod.js")

const text = kod.getArg(0);

const data = mostFrequentWords(text);

kod.printAsArray(data);