var Twitter = require('twitter');
var StreamRunner = require('streamrunner');
var config = require('./config.json');
var companyList = require("./config.json");

init();

function init() {
	console.log('runnning');
	
	var client = new Twitter({
		consumer_key: config.consumer_key,
		consumer_secret: config.consumer_secret,
		access_token_key: config.access_token_key,
		access_token_secret: config.access_token_secret
	});
	
	var stream = new StreamRunner(client,);
	
}

function stream(params) {
	client.stream('statuses/filter', { track: '$AAPL' }, function (stream) {
		stream.on('data', logTweet);
		stream.on('error', logError);
	});
}

function logTweet(tweet) {
	console.log(tweet.text);
}

function logError(error) {
	console.log(error);
}

function statuses(params) {
	client.get('statuses/user_timeline', params, function (error, tweets, response) {
		if (!error) {
			console.log(tweets);
		} else {
			console.log('error!');
		}
	});
}



stream();