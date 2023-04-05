function Setup() {
  return (
    <>
      <h2>Preparation</h2>

      <details>
        <summary>Install</summary>
        <p>Install Truffle and Ganache globally.</p>
        <code>$ npm install -g truffle ganache</code>
      </details>

      <details>
        <summary>Ganache and MetaMask</summary>
        <p>
          Open a terminal and run Ganache, a simulated Ethereum blockchain on
          your machine.
        </p>
        <code>$ ganache</code>
        <p>
          From the list of generated private keys, import the first one to
          MetaMask.
        </p>
        <p>
          Please note: while we suggest using Ganache for local testing, Ganache
          does not provide a fork of the Avalanche C-Chain. Thus, there
          are&nbsp;
          <a href="https://docs.avax.network/dapps/launch-your-ethereum-dapp#gotchas-and-things-to-look-out-for">
            some differences
          </a>
          &nbsp;to be aware of, and you should plan to test your completed code
          against the Avalanche Fuji Testnet (see below) before deploying to the
          Avalanche Mainnet.
        </p>
      </details>

      <details>
        <summary>Avalanche Fuji Testnet and MetaMask</summary>
        <p>
          Obtain Fuji Testnet AVAX from the&nbsp;
          <a href="https://faucet.avax-test.network/">Avalanche Faucet</a>. Add
          the Fuji Testnet to MetaMask.
        </p>
        <p>
          The <span className="code">fuji_testnet</span> has been added to
          the&nbsp;
          <span className="code">truffle-config.js</span> file for you. You will
          need to create a <span className="code">.env</span> file to store your
          mnemonic and your Infura ID for use with this network.
        </p>
        <p>
          Once your wallet is funded with Fuji testnet token, you can proceed to
          deploy your contracts there using Truffle!
        </p>
      </details>

      <details>
        <summary>Truffle</summary>
        <h3>Using Ganache:</h3>
        <p>
          Keep Ganache running and open another terminal. Let's compile and
          deploy our contracts to Ganache.
        </p>
        <code>
          {`$ cd truffle\n`}
          {`$ truffle migrate --network development\n`}
          <span className="dim-color">
            # The `development` network points to Ganache, it's configured in
            truffle/truffle-config.js on line 70.
          </span>
        </code>

        <h3>Using the Fuji Testnet:</h3>
        <p>
          After having funded wallet with Fuji testnet token, let's compile and
          deploy our contracts to Fuji.
        </p>
        <code>
          {`$ cd truffle\n`}
          {`$ truffle migrate --network fuji_testnet\n`}
          <span className="dim-color">
            # The `fuji_testnet` network is configured in
            `truffle/truffle-config.js`.
          </span>
        </code>
        <p>
          Please note: Transaction fees are listed as being in "ETH" but for
          deployments to the Avalanche C-Chain, the fees are actually in AVAX.
          Anywhere you see ETH when deploying, remember that the amount is
          correct but should be denominated in AVAX.
        </p>
      </details>
    </>
  );
}

export default Setup;
