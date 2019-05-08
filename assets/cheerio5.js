const fs = require("fs");
var lineReader = require("line-reader");
var csv = require("fast-csv");
var cheerio = require("cheerio");
var request = require("request");
// 0:68

async function myF() {
  lineReader.eachLine("./SerialNumbersWithName.json", function(line, last) {
  // lineReader.eachLine("./data.csv", function(line, last) {
    var content = fs.readFileSync('./SerialNumbersWithName.json')
    // console.log('Output content : ' + content)
    console.log(line)


  // const url = line.slice(0, 69);
  //   const name = line.slice(70);
  //   const urla = line.slice(0, 69)
  //   const name = line.slice(70)
  //   request(url, function(err, resp, url) {
  //     if (!err) {
  //       // Address Scrape
  //       const $ = cheerio.load(url);
  //       const td = $(
  //         "table tr td table tr td table tr:nth-child(4) td:nth-child(1)"
  //       );
  //       const address = td.text().slice(17, 70);
  //       const newURL = line.slice(0, 69);
  //       // console.log(newURL)
  //       const pair =
  //         "{name:" +
  //         name +
  //         "," +
  //         "\n" +
  //         "address: " +
  //         address +
  //         "," +
  //         "\n" +
  //         "url: " +
  //         newURL +
  //         "}" +
  //         "\n";
  //     console.log(pair.toString())
  //     } else {
  //       return (err)
  //     }
      
  //   });
  // fs.appendFile("../address.csv", pair, err => {
  //   if (err) throw err;
  //   console.log(pair);
  //   console.log("saved");
  // });
})
  };
