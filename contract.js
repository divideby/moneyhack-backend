const ABI = [ { "constant": true, "inputs": [], "name": "getData", "outputs": [ { "name": "", "type": "string", "value": "Hello" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "helloString", "type": "string" } ], "name": "setData", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0xb777c84b1285edcd9206bc187a6ed9a60014088e" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" } ];

const address = "0xB349707090AF74836b4E901879aed051Ed534BD2";

module.exports = {
  ABI,
  address,
};
