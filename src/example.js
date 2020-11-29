const PeerId = require('peer-id')
const fs = require('fs');



async function main() {
    let data = '';
    await PeerId.create({ bits: 2048, keyType: 'rsa' }, (a, b) => data = b)
    console.log('id', data.toJSON())
    fs.writeFileSync("peerId", JSON.stringify(data.toJSON()));
}

main()