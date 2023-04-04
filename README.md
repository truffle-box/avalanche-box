# Avalanche Truffle Box

This box comes with everything you need to start using Truffle to write, compile, test, and deploy smart contracts, and interact with them from a React app, using the Avalanche C-Chain.

Avalanche is an open-source platform for building decentralized applications (Dapps) in one interoperable, highly scalable ecosystem.  The Avalanche C-Chain is an implementation of the Ethereum Virtual Machine (EVM). The C-Chain’s API supports Geth's API and supports the creation and execution of smart contracts written in Solidity. For more details regarding the Avalanche C-Chain API, see [here](https://docs.avax.network/apis/avalanchego/apis/c-chain).

## Installation

First ensure you are in an empty directory.

Run the `unbox` command using 1 of 2 ways.

```sh
# Install Truffle globally and run `truffle unbox`
$ npm install -g truffle
$ truffle unbox avalanche
```

```sh
# Alternatively, run `truffle unbox` via npx
$ npx truffle unbox avalanche
```

Start the react dev server.

```sh
$ cd client
$ npm start
```

From there, follow the instructions on the hosted React app. It will walk you through using Truffle to deploy the `SimpleStorage` contract, making calls to it, and sending transactions to change the contract's state.

## FAQ

- __How do I use this with Ganache (or any other network)?__

  This Truffle project contains several networks to which you can deploy: `development`(the network used for Ganache), `fuji_testnet`, and `c_chain_mainnet`. If you'd like to change these, it's as easy as modifying the Truffle config file! Check out [our documentation on adding network configurations](https://trufflesuite.com/docs/truffle/reference/configuration/#networks). From there, you can run `truffle migrate` pointed to your network of choice, restart the React dev server, and see the change take place.

- __Where can I find more resources?__

  This Box is a sweet combo of [Truffle](https://trufflesuite.com) and [Webpack](https://webpack.js.org). Either one would be a great place to start!
