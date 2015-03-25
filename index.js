var express = require('express');
var app = express(),
server = require('http').createServer(app),
io = require('socket.io').listen(server);

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

server.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});



















var twitter = require('ntwitter');

var watchSymbols = ['like', 'dislike'];

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