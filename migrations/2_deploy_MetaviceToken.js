var Migrations = artifacts.require("Migrations");
var MetaviceToken = artifacts.require("MetaviceToken");

module.exports = function (deployer, network, accounts) {
  switch (network) {
      /* Mainnet Deployer */
      case "bsc_mainnet":
          deployMainnet(deployer, network); break;

      /* Testnet Deployer */
      case "bsc_testnet":
          deployTestnet(deployer, network); break;
  }
};

/* ------------------------------
        Mainnet Deployer
------------------------------ */

function deployMainnet(deployer, network) {
  ensureMainnet(network);
  deployer.deploy(MetaviceToken);
}

/* ------------------------------
      Testnet Deployer
------------------------------ */

function deployTestnet(deployer, network) {
  ensureNotMainnet(network);
  deployer.deploy(MetaviceToken);
}

/* ------------------------------
          Utilities
------------------------------ */

function ensureMainnet(network) {
  if (!network.includes("mainnet")) {
      console.log(`ERROR!!! You're deploying contracts into non-mainnet network. Current network = ${network}`);
      process.exit(1);
  }
}

function ensureNotMainnet(network) {
  if (network.includes("mainnet")) {
      console.log(`ERROR!!! You're deploying contracts into mainnet. Current network = ${network}`);
      process.exit(1);
  }
}
