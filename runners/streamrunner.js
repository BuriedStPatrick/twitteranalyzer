module.exports = {
	StreamRunner : StreamRunner
};

var StreamRunner = function(client, companies, successFn, errorFn){
	this.client = client;
	this.companies = companies;
	this.successFn = successFn;
	this.errorFn = errorFn;
	
	function run(){
		client.stream('statuses/filter', { track: '$AAPL' }, function (stream) {
			stream.on('data', successFn);
			stream.on('error', errorFn);
		});
	}
	
	return{
		run : run
	}
}