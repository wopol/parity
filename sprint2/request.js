const fetch = require('isomorphic-fetch')

async function run(method, params) {
    // Wywołujemy asynchroniczny request do naszego nodea
    const res = await fetch('http://localhost:8545/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            jsonrpc: '2.0',
            id: 1,
            method: method,
            params: params
        })
    })

    // Parsujemy odpowiedź jako JSON
    const json = await res.json()
    return json.result;
}

module.exports.run = run