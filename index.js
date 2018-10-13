const { run } = require("./request");


(async function () {
    let { number, hash, transactions, timestamp, parentHash } = await run('eth_getBlockByNumber', ['latest', false]);
    let i = 3;
    let lastParentHash = parentHash

    display({ number, hash, transactions, timestamp });

    while (i > 0) {
        let { number, hash, transactions, timestamp, parentHash } = await run('eth_getBlockByHash', [lastParentHash, false]);
        lastParentHash = parentHash
        display({ number, hash, transactions, timestamp });
        i--
    }

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