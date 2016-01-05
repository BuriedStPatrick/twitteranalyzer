var Twitter = require('twitter'),
	StreamRunner = require('./runners/streamrunner'),
	Analyzer = require('./runners/analyzer'),
	ExcelExporter = require('./runners/excelexport'),
	Config = require('./config.json'),
	watson = require('watson-developer-cloud');

function init() {
	console.log('runnning');
	
	var watsonCredentials = {
		version: Config.bluemix.version,
		url: Config.toneanalyzer.url,
		username: Config.toneanalyzer.username,
		password: Config.toneanalyzer.password
	};
	
	var toneAnalyzer = watson.tone_analyzer(watsonCredentials);
    var analyzer = new Analyzer(toneAnalyzer);
	
	var twitterClient = new Twitter({
		consumer_key: Config.twitter.consumer_key,
		consumer_secret: Config.twitter.consumer_secret,
		access_token_key: Config.twitter.access_token_key,
		access_token_secret: Config.twitteraccess_token_secret
	});
	var runner = new StreamRunner(twitterClient, Config.companies, analyzer.logTone, logError);
	
	runner.run();
}
function logError(error) {
	console.log(error);
}

init();