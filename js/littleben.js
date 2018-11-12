"use strict";
$(function(){

$("#siri").hide();
$("#alexa").hide();
$("#bixby").hide();

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
$("#drop").dropdown({
values: [
{
        name: "Overview",
        value: "overview",
        selected: true
},
{
    name: "Alexa",
    value: "alexa"
},
{
    name: "Bixby",
    value: "bixby"
},
{
    name: "Siri",
    value: "siri",

}

],
action: function(text, value){
    switch (value){
        case "siri":
            $("#siri").show();
            $("#alexa").hide();
            $("#bixby").hide();
            $("#overview").hide();
            break;
        case "alexa":
            $("#siri").hide();
            $("#alexa").show();
            $("#bixby").hide();
            $("#overview").hide();
            break;
        case "bixby":
            $("#alexa").hide();
            $("#siri").hide();
            $("#bixby").show();
            $("#overview").hide();
            break;
        case "overview":
        $("#overview").show();
        $("#alexa").hide();
        $("#siri").hide();
        $("#bixby").hide();

    }
    $("#drop").dropdown("set selected",value);
    $("#drop").dropdown("toggle");
}
});
});