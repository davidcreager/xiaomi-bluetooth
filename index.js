'use strict';
const logs = require("./src/logs");
const dev =require("./src/accessory");
const config = require("./config.json");


var log = new logs.Log("P1",false,true);
var gConfig = {};
var accessConfig = [];
for (var key in config) {
	console.log("key =" + key + " value=" + JSON.stringify(config[key]));
	if (key=="accessories") {
		accessConfig = config[key];
	} else {
		gConfig[key] = config[key];
	}
}
var devices = {};
accessConfig.forEach( function(val,ind) {
	var newConfig = {...gConfig,...val };
	var device = new dev(log,newConfig);
	devices[val.address] = {"config": newConfig, "device": device};
	console.log ("config #" + ind + " - " + newConfig.address + " " + newConfig.name);
})


//console.log("enum warn = " + log.LogLevel.WARN);
//console.log("enum info = " + log.LogLevel.INFO);
//console.log("debugEnabled = " + log.debugEnabled);
log.warn("hello");
