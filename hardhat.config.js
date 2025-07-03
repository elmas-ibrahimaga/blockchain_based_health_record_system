require('@nomiclabs/hardhat-ethers');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: {
        mnemonic: "orchard raise enough river genius carpet exile lesson hold rival jar exotic",
      },
    },
  },
}; 
