const { findSquareNeighborCorner } = require("./solution.js")
const kod = require("../../runner-lib/js/kod.js")

const points = kod.getArgAsArray(0);

const data = findSquareNeighborCorner(points);

kod.printAsArray(data);