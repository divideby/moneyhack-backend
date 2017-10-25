const express = require("express");
const Web3 = require("web3");
const bodyParser = require('body-parser')

const contract = require("./contract");

const app = express();
const web3 = new Web3();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.use(function (req, res, next) {
    var origins = [
        'http://localhost:3000',
    ];

    for(var i = 0; i < origins.length; i++){
        var origin = origins[i];

        if(req.headers.origin.indexOf(origin) > -1){
            res.header('Access-Control-Allow-Origin', req.headers.origin);
        }
    }
    
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


const { eth } = web3;

web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

console.log(eth.coinbase);

const transaction = "0x254d9e180c610bafd1b496c3149646b230109826fffd064174c7fe59d1fb66ce";

console.log(eth.getTransaction(transaction));
console.log(eth.blockNumber);

const helloContract = eth.contract(contract.ABI).at(contract.address);

app.post("/", function(req, res) {
  const { personal } = web3;
  console.log(req.body);
  personal.unlockAccount(req.body.account, req.body.password, 1000);

  res.send(helloContract.setData.sendTransaction(req.body.message, { from: req.body.account }));
});

app.listen(8000, function() {
  console.log("Our server on 8000 port");
});
