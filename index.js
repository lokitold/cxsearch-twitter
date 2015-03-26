var express = require('express');
var app = express(),
server = require('http').createServer(app),
io = require('socket.io').listen(server);

elcomercio = 0;
larepublica = 0;
total = 0;

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  //response.send('Hello World!');
  response.sendfile(__dirname + '/index.html');
});

server.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});


//twitter

var twitter = require('ntwitter');

var watchSymbols = ['elcomercio', 'larepublica'];

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
		//console.log(tweet);
		text = tweet.text.toLowerCase();
		if(text.indexOf("elcomercio") !==  -1){
			elcomercio++
			total++
			io.sockets.volatile.emit('elcomercio',{
				user: tweet.user.screen_name,
				text: tweet.text,
				avatar : tweet.user.profile_image_url_https
			});
		}




		if(text.indexOf("larepublica") !==  -1){
			larepublica++
			total++
			io.sockets.volatile.emit('larepublica',{
				user: tweet.user.screen_name,
				text: tweet.text,
				avatar : tweet.user.profile_image_url_https
			});
		}
		else if(text.indexOf("@La_Republica") !==  -1){
			larepublica++
			total++
			io.sockets.volatile.emit('larepublica',{
				user: tweet.user.screen_name,
				text: tweet.text,
				avatar : tweet.user.profile_image_url_https
			});
		}




		//console.log(tweet.user.profile_image_url_https);
		io.sockets.volatile.emit('tweet',{
			//user: tweet.user.screen_name,
			//text: tweet.text,
			elcomercio : (elcomercio/total)*100,
			larepublica : (larepublica/total)*100
		});
	});
});