var Analyzer = function (toneAnalyser) {
	this.toneAnalyzer = toneAnalyser;

	this.logTone = function (tweet) {
		toneAnalyzer.tone(tweet.text, function (err, data) {
			if (err) {
				console.log(err);
			} else {
				console.log(data);
			}
		});
    }
}

module.exports = Analyzer;