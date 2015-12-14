var StreamRunner = function(client, companies, successFn, errorFn){
	this.client = client;
	this.companies = companies;
	this.successFn = successFn;
	this.errorFn = errorFn;
	
	this.run = function (){
		console.log('run()');
		client.stream('statuses/filter', { track: '$AAPL' }, function (stream) {
			stream.on('data', successFn);
			stream.on('error', errorFn);
		});
	}
}

module.exports = StreamRunner;