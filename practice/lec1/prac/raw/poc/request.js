// npm install request
// to make request to any server
let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
request("https://www.espncricinfo.com/series/_/id/8039/season/2015/icc-cricket-world-cup", dataReciever);
function dataReciever(err,res,html){
    if(err == null && res.statusCode == 200){
        // console.log(html);
        parsefile(html);
    }else if(res.statusCode == 404){
        console.log("Page Not Found");
    }else{
        console.log(err);
        console.log(res);
    }
}
function parsefile(html){
    let $ = cheerio.load(html);
    // let list = $("ul.list-unstyled.mb-0");              // to get html list of page
    // fs.writeFileSync("list.html", list);

    let a = $("li.widget-items.cta-link a").attr("href");
    // console.log(a);

    // for fullLink
    let fullLink = ("https://www.espncricinfo.com"+a);
    // console.log(fullLink);
    request(fullLink, matchPageHandler);
}

function matchPageHandler(err,res,html){
    if(err == null && res.statusCode == 200){
        // console.log(html);
        parseMatch(html);
    }else if(res.statusCode == 404){
        console.log("Page Not Found");
    }else{
        console.log(err);
        console.log(res);
    }
}

function parseMatch(html){
    // fs.writeFileSync("allMatches.html",html);
    let $ = cheerio.load(html);
    // in full page
    let allCards = $(".col-md-8.col-16");
    // fs.writeFileSync("allCards.html",allCards);

    for(let i=0; i<allCards.length; i++){
        // find => is use to find anything inside a element
        let result = $(allCards[i]).find(".extra-small.mb-0.match-description.match-description-bottom").text();
        let details = $(allCards[i]).find(".small.mb-0.match-description").text();
        let allanchors = $(allCards[i]).find(".match-cta-container a");
        let scoreCardLink = $(allanchors[0]).attr("href");
        console.log("###################################");
        console.log(result);
        console.log(details);
        console.log("https://www.espncricinfo.com"+scoreCardLink);
        console.log("###################################");
    }
}