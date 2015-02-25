#!/usr/bin/env node

var cheerio = require('cheerio')
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data) {
  var $ = cheerio.load(data)
  $("script").remove()
  console.log($.html())
});
