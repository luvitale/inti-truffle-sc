require("dotenv").config({ path: "./.env" });
const HDWalletProvider = require("@truffle/hdwallet-provider");
const MNEMONIC = process.env.MNEMONIC;
const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const GAS = 3000000;
const GASPRICE = 5;
const SKIP_DRY_RUN = false;

module.exports = {
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.7", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
  contracts_directory: "./contracts/",
  contracts_build_directory: "./build/",
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: ETHERSCAN_API_KEY,
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Any network (default: none)
    },
    main: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`
        ),
      network_id: 1,
      gas: GAS,
      gasPrice: 1000000000 * GASPRICE
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`
        ),
      network_id: 3,
      gas: 5500000,
      gasPrice: 10e9,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`
        ),
      network_id: 4,
      gasPrice: 10e9,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    goerli: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://goerli.infura.io/v3/${INFURA_PROJECT_ID}`
        ),
      network_id: 5,
      gasPrice: 10e9,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    kovan: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://kovan.infura.io/v3/${INFURA_PROJECT_ID}`
        ),
      network_id: 42,
      gasPrice: 10e9,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    // Binance Smart Chain
    bsc: {
      provider: () => 
        new HDWalletProvider(
          MNEMONIC, 'https://bsc-dataseed.binance.org/'
        ),
      network_id: 56,
      skipDryRun: SKIP_DRY_RUN
    },
    bsc_test: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC, 'https://data-seed-prebsc-1-s1.binance.org:8545/'
        ),
      network_id: 97,
      skipDryRun: SKIP_DRY_RUN
    },
    // xDai
    xdai: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC, 'https://dai.poa.network'
        ),
      network_id: 100,
      gas: GAS,
      gasPrice: 1000000000 * GASPRICE,
      skipDryRun: SKIP_DRY_RUN
    },
    // polygon (matic)
    matic: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://rpc-mainnet.maticvigil.com/`),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    mumbai: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://rpc-mumbai.maticvigil.com/`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    // rsk
    rsk: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://public-node.rsk.co`),
      network_id: 30,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    rsk_test: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://public-node.testnet.rsk.co`),
      network_id: 31,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },
};
