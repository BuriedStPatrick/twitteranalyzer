var Twitter = require('twitter');
var Test = require('./test');
console.log('running');
Test.test();

var client = new Twitter({
	consumer_key: 'hPVJAl7aFOITkXbJYTSvWDfX1',
	consumer_secret: 'hy8qB32q4XPGrX7EvU01XkYz7OVmSpppPINUGsSYv1mmR2XPLy',
	access_token_key: '3580455497-fO8H3jf7bjaPmiuuJiYcHG4SxYo3tylPKH84DXo',
	access_token_secret: '764QqcYKoh7W6hROcvI5U8bmRZjrkEKqm3SyhRuntwb1i'
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

// var params = {screen_name: 'EthanPChung'};
// stream(params);