const { mostFrequentWords } = require("./solution.ts")
const argv: string[] = process.argv.slice(2);
const text: string = argv[0];
mostFrequentWords(text);
