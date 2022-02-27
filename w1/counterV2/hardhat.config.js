require("@nomiclabs/hardhat-waffle");
const fs = require('fs');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 const ALCHEMY_API_KEY = "KEY";
 const ROPSTEN_PRIVATE_KEY = fs.readFileSync(".privateKey").toString().trim();
 const API = fs.readFileSync(".api").toString().trim();

module.exports = {
  solidity: "0.8.11",
  networks: {
    ropsten: {
      url: API,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};
