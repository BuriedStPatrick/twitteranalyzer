module.exports = {
	Datarow : Datarow	
};

var Datarow = function(tweetbody, numFollowers, timestamp){
	this.tweetbody = tweetbody;
	this.numFollowers = numFollowers;
	this.timestamp = timestamp;
}