const request = require('request')
const cheerio = require('cheerio');

var url = 'http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=10220002'
// var url = './SerialNumbersWithName.json'
request(url, function(err, response, html) {
  if(!err) {
    var $ = cheerio.load(html);
    console.log($.toString())
  }
})