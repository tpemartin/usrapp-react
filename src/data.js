
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

var usrRss
$.ajax({
    method: "GET", 
    url: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40eaglemt2019",
    success: (d) => {
        usrRss=d;
        //console.log(d)
    },
    dataType: "json"
})

/*
$.ajax({
    url: "https://medium.com/feed/usrsocntpu",
    success: () => {},
    dataType: "xml"
    })
    */