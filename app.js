const express = require("express");
const Web3 = require("web3");

const contract = require("./contract");

const app = express();
const web3 = new Web3();

const { eth } = web3;

web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

console.log(eth.coinbase);

const transaction = "0x254d9e180c610bafd1b496c3149646b230109826fffd064174c7fe59d1fb66ce";

console.log(eth.getTransaction(transaction));
console.log(eth.blockNumber);

const helloContract = eth.contract(contract.ABI).at(contract.address);

app.get("/", function(req, res) {
  const { personal } = web3;

  personal.unlockAccount(eth.coinbase, "123", 1000);

  res.send(helloContract.setData.sendTransaction("Hell", { from: eth.coinbase }));
});

app.listen(8000, function() {
  console.log("Our server on 8000 port");
});
