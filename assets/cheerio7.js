const express = require('express')
const fs = require("fs");
var lineReader = require("line-reader");
var csv = require("fast-csv");
var cheerio = require("cheerio");
var request = require("request");
// 0:68

// fs.readFile('./SerialNumbersWithName.json', 'utf8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     lineReader.eachLine("./SerialNumbersWithName.json", function(line,last){
//       request(line, function(err, resp, line) {
//         if(!err) {
//           console.log(line)
//           const $ = cheerio.load(line)
//           const td = $(
//             "table tr td table tr td table tr:nth-child(4) td:nth-child(1)"
//           ); 
//           console.log(line)
//         }
//       })
//     })
//   }
// })

  lineReader.eachLine("./SerialNumbersWithName.json", function(line, last) {
  // lineReader.eachLine("./data.csv", function(line, last) {
    request(line, function(err, resp, line) {
      if (!err) {
        // Address Scrape
        const $ = cheerio.load(line);
        const td = $(
          "table tr td table tr td table tr:nth-child(4) td:nth-child(1)"
        );
        const address = td.text().slice(17, 70);
        const newURL = line.slice(0, 69);
        // console.log(newURL)
        const pair =
          "{name:" +
          name +
          "," +
          "\n" +
          "address: " +
          address +
          "," +
          "\n" +
          "url: " +
          newURL +
          "}" +
          "\n";
      console.log(pair.toString())
      } else {
        return (err)
      }
      
    });
  // fs.appendFile("../address.csv", pair, err => {
  //   if (err) throw err;
  //   console.log(pair);
  //   console.log("saved");
  // });
})