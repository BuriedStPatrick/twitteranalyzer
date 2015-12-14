var Twitter = require('twitter');
// var Test = require('./test');

var client = new Twitter({
	consumer_key: process.env.twitteranalyzer_consumerkey,
	consumer_secret: process.env.twitteranalyzer_consumersecret,
	access_token_key: process.env.twitteranalyzer_accesstokenkey,
	access_token_secret: process.env.twitteranalyzer_accesstokensecret
});

function stream(params){
	client.stream('statuses/filter', {track: '$AAPL'}, function(stream){
		stream.on('data', logTweet);
		stream.on('error', logError);
	});
}

function logTweet(tweet){
	console.log(tweet.text);
}

function logError(error){
	console.log(error);
}

function statuses(params){
	client.get('statuses/user_timeline', params, function(error, tweets, response){
		if(!error){
			console.log(tweets);
		}else{
			console.log('error!');
		}
	});
}