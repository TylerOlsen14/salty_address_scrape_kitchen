// ohhhh snap! this guy works!!!
const fs = require('fs');
var lineReader = require('line-reader');
var csv = require('fast-csv');
var cheerio = require('cheerio');
var request = require('request');
// 0:68

lineReader.eachLine('./Url.csv', function(line, last) {
    console.log(line)
    // const url = line.slice(0, 69)
    // // const url = line.slice(0, 69)
    // const name = line.slice(70)
    request(line, function(err, resp, url) {
        if (!err){
        const $ = cheerio.load(line);
        const td = $('table tr td table tr td table tr:nth-child(4) td:nth-child(1)');
        const address = (td.text().slice(0, 49))
        // const pair = (name + '\n' + address + '\n' + url + '\n')
        console.log(address.toString())
    // fs.appendFile('./address.csv', pair, (err) => {
    //     if (err) throw err;
    //     console.log(pair + ' saved');
    // })
    //     }
    //   },

    // );

    // if (last){
    //     return false
    // }
    }
    })
})
