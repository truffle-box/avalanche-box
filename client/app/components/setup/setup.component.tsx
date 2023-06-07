import styles from "./setup.module.css";

export function Setup(): JSX.Element {
  return (
    <section className={styles.container}>
      <h2>Preparation</h2>

      <details className={styles.accordion}>
        <summary>Install</summary>
        <p>Install Truffle and Ganache globally.</p>
        <code>$ npm install -g truffle ganache</code>
      </details>

      <details className={styles.accordion}>
        <summary>Ganache and MetaMask</summary>
        <p>
          Open a terminal and run Ganache, a simulated Ethereum blockchain on
          your machine.
        </p>
        <code>$ ganache</code>
        <p>
          From the list of generated private keys, import the first one into
          MetaMask.
        </p>
        <p>
          Please note: While we suggest using Ganache for local testing, Ganache
          does not provide a fork of the Avalanche C-Chain. There are&nbsp;
          <a href="https://docs.avax.network/dapps/launch-your-ethereum-dapp#gotchas-and-things-to-look-out-for">
            some differences
          </a>
          &nbsp;to be aware of, and you should plan to test your completed code
          against the Avalanche Fuji Testnet (see below) before deploying to the
          Avalanche Mainnet.
        </p>
      </details>

      <details className={styles.accordion}>
        <summary>Avalanche Fuji Testnet and MetaMask</summary>
        <p>
          Obtain Fuji testnet AVAX from the&nbsp;
          <a href="https://faucet.avax-test.network/">Avalanche Faucet</a>. Add
          the Fuji Testnet to MetaMask.
        </p>
        <p>
          The <span className="code">fuji_testnet</span> network has been added
          to &nbsp;<span className="code">truffle-config.js</span> for you. You
          will need to create a <span className="code">.env</span> file to store
          your mnemonic and your Infura ID to use with this network.
        </p>
      </details>

      <details className={styles.accordion}>
        <summary>Truffle (deploy to Ganache)</summary>
        <p>
          Keep Ganache running and open another terminal. Let's compile and
          deploy our contract to Ganache.
        </p>
        <code>
          {`$ cd truffle\n`}
          {`$ truffle migrate --network development\n`}
          <span className="comment">
            # The `development` network points to Ganache. Networks can be
            configured in truffle/truffle-config.js
          </span>
        </code>
      </details>

      <details className={styles.accordion}>
        <summary>Truffle (deploy to C-Chain)</summary>
        <p>
          Once your wallet is funded with Fuji testnet token, you can proceed to
          deploy contracts there using Truffle!
        </p>
        <code>
          {`$ cd truffle\n`}
          {`$ truffle migrate --network fuji_testnet\n`}
          <span className="comment">
            # The `fuji_testnet` is configured in truffle/truffle-config.js
          </span>
        </code>
        <p>
          Please note: Transaction fees are listed as being in&nbsp;
          <span className="code">ETH</span> but here the fees are actually
          in&nbsp;<span className="code">AVAX</span>. Remember that the amount
          is correct but should be denominated in&nbsp;
          <span className="code">AVAX</span>.
        </p>
      </details>
    </section>
  );
}
