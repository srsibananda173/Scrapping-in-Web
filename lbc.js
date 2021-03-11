let request = require("request");
let cheerio = require("cheerio");
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary";

request(url, cb)
// intial content -> scrap 
// last ball commentry
// first ball commentary 
// automation -> browser
function cb(err, response, html) {
    let chSelector = cheerio.load(html);
    let element = chSelector(".d-flex.match-comment-padder.align-items-center .match-comment-long-text");
    // multiple matching -> all first 
    console.log(element.length)
    // console.log(element.html());
    // indexing 
    
  let text= chSelector(element[0]).text();
  console.log(text);
    //  let lbc= element.text();
    //    console.log(lbc);
}
