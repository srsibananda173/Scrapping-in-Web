let request = require("request");
let cheerio = require("cheerio");
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/rajasthan-royals-vs-chennai-super-kings-4th-match-1216496/full-scorecard";
request(url, cb)

function cb(err, response, html) {
    let chSelector = cheerio.load(html);
    let element = chSelector(".table.batsman");
    // multiple matching -> all first 
    // console.log(element.length)
    //  let batsmanString = "";
    let hrsname = "";
    let hruns = 0;
    for(let i = 0; i < element.length; i++){
        // batsmanString += chSelector(element[i]).html();
        let teamBowlers = chSelector(element[i]).find("tr");
        console.log(teamBowlers.length);
        for (let j = 0; j < teamBowlers.length; j++) {
            // let bolHtml = chSelector(teamBowlers[j]).text();
            let eachbowlcol = chSelector(teamBowlers[j]).find("td");
            if (eachbowlcol.length == 8) {
                let playerName = chSelector(eachbowlcol[0])
                    .text();
                let runs = chSelector(eachbowlcol[2]).text();
                console.log(playerName, "    ", runs);
                // compare
                if (hruns<=Number(runs)) {
                        hruns=runs;
                        hrsname=playerName;
                }
            }
        }
        console.log("```````````````````````````````````");
        
    }    
    console.log("Player ",hrsname,"with runs : ",hruns)
    
    // console.log(batsmanString);

}
