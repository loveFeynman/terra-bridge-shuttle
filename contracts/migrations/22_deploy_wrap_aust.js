const WrappedaUST = artifacts.require("WrappedaUST");

const CHAIN_ID = {
  mainnet: 1,
  ropsten: 3,
  kovan: 42,
  bsc: 56,
  bsc_testnet: 97,
};

module.exports = function (deployer, network) {
  if (network == "mainnet" || network == "ropsten") {
    deployer.deploy(WrappedaUST, {
      gas: 5000000,
      overwrite: false,
      chainId: CHAIN_ID[network],
    });
  }
};