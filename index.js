const zmq = require("zeromq/v5-compat")
const sock = zmq.socket('sub')
const bitcoin = require("bitcoinjs-lib");

sock.connect('tcp://127.0.0.1:29000');


sock.on('message', function(topic, message) {
  var block = bitcoin.Block.fromHex(message)
  var nTransactions = block.transactions;
  console("Block size", nTransations.length())
    for (let i = 0; i < nTransactions.length(); ++i) {
      const tx = bitcoin.Transaction.fromHex(i);
      console.log(topic.toString(), tx.getId()) 
    }
})

/*
sock.on('message', function(topic, message) {
  var block = bitcoin.Block.fromHex(message)
  console.log(topic.toString(), block) 
})
*/

sock.subscribe('rawblock')