var json2csv = require('json2csv');
 
function addRow(tweet){
	logTweet(tweet);
}

function logTweet(tweet) {
	console.log(tweet.text);
}

function toDataRow(tweet){
	
}

module.exports = {
	addRow : addRow
};