const path = require("path");
const fs = require("fs");
const solc = require("solc");

// const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
// const source = fs.readFileSync(lotteryPath, "utf8");

// module.exports = solc.compile(source, 1).contracts[":Lottery"];

const activityPath = path.resolve(__dirname, "contracts", "JobActivity.sol");
const source = fs.readFileSync(activityPath, "utf8");

module.exports = solc.compile(source, 1).contracts[":JobActivity"];