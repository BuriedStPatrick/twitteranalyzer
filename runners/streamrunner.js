var StreamRunner = function(client, companies, successFn, errorFn){
	this.client = client;
	this.companies = companies;
	this.successFn = successFn;
	this.errorFn = errorFn;
	
	function runStream(company) {
		client.stream('statuses/filter', { track: company.id}, function (stream) {
			stream.on('data', successFn);
			stream.on('error', errorFn);
		});
	}
	
	this.run = function () {
	    runStream(companies[0]);
	}	
}

module.exports = StreamRunner;