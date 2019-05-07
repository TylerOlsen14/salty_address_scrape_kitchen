//this file takes the serial numbers and forms a url with the numbers
// the Url is then put in a CSV file
var readline = require('readline');
var fs = require('fs');
const request = require('request');
// const request = require('request-promise');
var lineReader = require('line-reader')

// var myInterface = readline.createInterface({
//   input: fs.createReadStream('./SerialNumbers.csv')
// });

lineReader.eachLine('./SerialNumbers.csv', function(line, last) {
  let templine = 'http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=' + line + '\n';

  fs.appendFile('./Url.csv', templine, (err) => {
    if (err) throw err;
    console.log(templine + ' saved');
  });
  if (last) {
    return false
  }
})

// myInterface
//     .on('line', (line) => {
//     let url = ('http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=' + line);
//     let serialNumberArray = [];
//     serialNumberArray.push(url);
//         console.log(url);
//     fs.appendFile
//     })
