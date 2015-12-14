var Twitter = require('twitter');
var StreamRunner = require('./runners/streamrunner');
var ExcelExporter = require('./runners/excelexport');
var Config = require('./config.json');

function init() {
	console.log('runnning');
	
	var client = new Twitter({
		consumer_key: Config.consumer_key,
		consumer_secret: Config.consumer_secret,
		access_token_key: Config.access_token_key,
		access_token_secret: Config.access_token_secret
	});
	var runner = new StreamRunner(client, Config.companies, ExcelExporter.addRow, logError);
	runner.run();
}
function logError(error) {
	console.log(error);
}

// function statuses(params) {
// 	client.get('statuses/user_timeline', params, function (error, tweets, response) {
// 		if (!error) {
// 			console.log(tweets);
// 		} else {
// 			console.log('error!');
// 		}
// 	});
// }

init();