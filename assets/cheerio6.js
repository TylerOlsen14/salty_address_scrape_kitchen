const fs = require("fs");
var lineReader = require("line-reader");
var csv = require("fast-csv");
var cheerio = require("cheerio");
var request = require("request");
// 0:68

  function myF() {
  lineReader.eachLine("./SerialNumbersWithName.json", function(line, last) {
  // lineReader.eachLine("./data.csv", function(line, last) {
    var content = fs.readFileSync('./SerialNumbersWithName.json')
    // console.log('Output content : ' + content)
    console.log(line)
  })
}