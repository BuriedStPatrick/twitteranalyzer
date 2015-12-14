var Datarow = require('../model/datarow');

function addRow(tweet){
	console.log('logTweet()');
	logTweet();
}

function logTweet(tweet) {
	console.log(tweet.text);
}

function toDataRow(tweet){
	return new Datarow(tweet.text, tweet.numFollowers, 'TIMESTAMP');
	//TODO: convert tweet to excel-row, return
}

module.exports = {
	addRow : addRow
};