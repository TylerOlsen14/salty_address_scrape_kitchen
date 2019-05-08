const express = require('express')
const app = express();
const http = require('http').Server(app);
const fs = require('fs');

var address;

fs.readFile('./assets/SerialNumbersWithName.json', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    address = JSON.parse(data);
    // for (let i=0;i<address.length;i++){
      console.log(data)
      // }
  }
})