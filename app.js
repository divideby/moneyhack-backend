const express = require("express");
const Web3 = require("web3");

const contract = require("./contract");

const app = express();
const web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

console.log(web3.eth.coinbase);

const { eth } = web3;

const helloContract = eth.contract(contract.ABI).at(contract.address);

app.get("/", function(req, res) {
  const { personal } = web3;

  personal.unlockAccount(eth.coinbase, "123", 1000);

  res.send(helloContract.setData.sendTransaction("Hell", { from: eth.coinbase }));
});

app.listen(8000, function() {
  console.log("Our server on 8000 port");
});
