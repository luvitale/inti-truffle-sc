const Voting = artifacts.require("Voting");

const CANDIDATES = ["AI", "AM", "BC", "BT", "IOT", "MV", "RT", "QC"];

const GAS = 5000000;

module.exports = function(deployer) {
  deployer.deploy(Voting, CANDIDATES.map(candidate => web3.utils.asciiToHex(candidate)), {gas: GAS});
} as Truffle.Migration;

// because of https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export {};
