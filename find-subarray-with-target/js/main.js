const { findSubarrayWithTarget } = require("./solution.js")
const kod = require("../../runner-lib/js/kod.js")

const nums = kod.getArgAsArray(0);
const target = kod.getArgAsArray(1);

const data = findSubarrayWithTarget(nums, target);

kod.printAsArray(data);