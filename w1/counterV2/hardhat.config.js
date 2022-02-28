require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const { url } = require("inspector");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const NETWORK = JSON.parse(fs.readFileSync('./.url', 'utf-8'));
const PRIVATE_KEY = JSON.parse(fs.readFileSync('./.privateKey', 'utf-8'));

module.exports = {
  solidity: "0.8.11",
  networks: {
    ropsten: {
      url: NETWORK.ropsten,
      accounts: PRIVATE_KEY.ropsten
    },
    ganache: {
      url: NETWORK.ganache,
      accounts: PRIVATE_KEY.ganache
    }
  }
};
