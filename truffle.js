let HDWalletProvider = require("truffle-hdwallet-provider");
let mnemoic = "secret";
let infura = "also secret"

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777" 
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(mnemoic, "https://rinkeby.infura.io/v3/" + infura);
      },
      network_id: 4,
      gas: 6700000, 
      gasPrice: 10000000000
    }
  }
};