var twitter = require('ntwitter');

var watchSymbols = ['$msft', '$intc', '$hpq', '$goog', '$nok', '$nvda', '$bac', '$orcl', '$csco', '$aapl', '$ntap', '$emc', '$t', '$ibm', '$vz', '$xom', '$cvx', '$ge', '$ko', '$jnj'];

// Instantiate the twitter connection
var t = new twitter({
	consumer_key: "Pnhwu4078h7aVAnlwMYfAsKjW",
	consumer_secret: "Tpo0GSs2lGbfF9sN09TcF62D2DA8H5i0VdXX5Irv0FkfowKGNF",
	access_token_key: "2188483430-Q09VdNg1VYaFkuZcPdnf5qNMBJpuuesysDPFIDq",
	access_token_secret: "rA18RrC8ybHthZAnBs13N4mALWFwif80fn6vXvYRbK0R2"
});
// //Tell the twitter API to filter on the watchSymbols
t.stream('statuses/filter', { track: watchSymbols }, function(stream) {
//We have a connection. Now watch the 'data' event for incomming tweets.
	stream.on('data', function(tweet) {
		console.log(tweet);
	});
});