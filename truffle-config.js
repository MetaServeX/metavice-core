const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require('fs');
const privateKey = fs.readFileSync('./.private_key', {encoding: 'utf8', flag: 'r' });

const bsc_mainnet_rpc = 'https://bsc-dataseed1.binance.org';
const network_bsc_mainnet = {
  provider: () => new HDWalletProvider(privateKey, bsc_mainnet_rpc),
  network_id: 56,
  gas: 5500000,
  confirmations: 0,
  timeoutBlocks: 200,
  skipDryRun: false
};

const bsc_testnet_rpc = 'https://data-seed-prebsc-1-s1.binance.org:8545';
const network_bsc_testnet = {
  provider: () => new HDWalletProvider(privateKey, bsc_testnet_rpc),
  network_id: 97,
  gas: 5500000,
  confirmations: 0,
  timeoutBlocks: 200,
  skipDryRun: false
};

const network_development = {
  host: "127.0.0.1",
  port: 8545,
  network_id: "*",
  // gas: 4600000,
};

module.exports = {
  networks: {
    development: network_development,
    bsc_mainnet: network_bsc_mainnet,
    bsc_testnet: network_bsc_testnet,

    mainnet: {
        provider: () => new HDWalletProvider(
        process.env.DEPLOYER_PRIVATE_KEY,
        process.env.INFURA_MAINNET_API
        ),
        gasPrice: 50000000000, // 50 gwei
        gas: 6900000,
        network_id: "1",
        timeoutBlocks: 800
    },
    ropsten: {
        provider: () => new HDWalletProvider(
        process.env.DEPLOYER_PRIVATE_KEY,
        process.env.INFURA_ROPSTEN_API
        ),
        gasPrice: 10000000000, // 10 gwei
        gas: 6900000,
        network_id: "3"
    },
    rinkeby: {
        provider: () => new HDWalletProvider(
        process.env.DEPLOYER_PRIVATE_KEY,
        process.env.INFURA_RINKEBY_API
        ),
        gasPrice: 10000000000, // 10 gwei
        gas: 6900000,
        network_id: "4"
    },
    kovan: {
        provider: () => new HDWalletProvider(
        process.env.DEPLOYER_PRIVATE_KEY,
        process.env.INFURA_RINKEBY_API
        ),
        gasPrice: 10000000000, // 10 gwei
        gas: 6900000,
        network_id: "42"
    },
  },

  mocha: {
  },

  compilers: {
    solc: {
      version: "0.6.12",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },
  }
};
