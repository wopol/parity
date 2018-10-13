const { run } = require("./request");


(async function () {
    let { hash } = await run('eth_getBlockByNumber', ['latest', false]);

    let { } = await run('eth_getTransactionByHash', [hash]);

})();

function display({ number, hash, transactions, timestamp }) {
    const time = parseInt(timestamp.substr(2), 16)

    console.log(`
        Block number: ${number}
        Block hash: ${hash}
        Block date: ${new Date(time * 1000)}
        Number of transactions: ${transactions.length}
  `)
}