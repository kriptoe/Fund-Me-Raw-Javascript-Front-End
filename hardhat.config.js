require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');

// Go to https://www.alchemyapi.io, sign up, create
const ALCHEMY_API_KEY = "iFxSIW19bCIO92d4cpQ2ytkyihGwYGf6";

module.exports = {
  solidity: "0.8.17",  
  networks: {
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`
    },
    matic: {
      url: `https://polygon-mainnet.infura.io/v3/f7b7acf6016549729668639dec074770`
    },    
    arbitrum: {
      url: `https://arb-mainnet.g.alchemy.com/v2/lIguUBlNorQF0qVOvhyXc57Tkgk3JynZ`
    },     
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`
    }
  }
}