require("@nomiclabs/hardhat-waffle");


const projectId = 'efbbff4625e549788b0b7886dab4e77f'

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: []
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: []
    },
  },
  solidity: "0.8.4",
};
