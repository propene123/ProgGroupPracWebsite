"use strict";
let content = [
    {
        title:"Little Ben's Page",
        description:"A page about AI assistants",
        tags:"alexa siri assistant ok google assistants",
        url:"littleben.html"
    },
    {
        title:"Big Ben's Page",
        description:"A page about the impact of internet communications",
        tags:"net web iot",
        url:"bigben.html"
    },
    {
        title:"Rory's Page",
        description:"A page about the impact of robotics in society",
        tags: "robot machine terminator",
        url:"rory.html"
    }
];

$("#SearchBox").search({
source: content,
searchFields: ["tags","title"],
fullTextSearch: true
});