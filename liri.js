var keys = require ('./keys.js');

var Twitter = require('twitter');

var Spotify = require('node-spotify-api');

var getMyTweets = function(){

var client = new Twitter(keys.twitterKeys);

var params = {screen_name: 'inrtracker'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
	if (!error) {
		for(vari=0; i<tweets.length; i++) {
			console.log(tweets[i].created_at);
			console.log(' ');
			console.log(tweets[i].text);
		}
	}
});

}


 
var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

var pick = function(caseData, functionData){
	switch(caseData) {
		case 'my-tweets' :
			getMyTweets();
			break;
		default:
		console.log('LIRI does not know that');
	}
}

var runThis = function(argOne, argTwo) {
	pick(argOne, argTwo);
};


runThis(process.argv[2], process.argv[3]);




//Spotify client key: a67f28450cb2402e9f71454db8f12e1c
//Spotify secret key: d86ecd1616c947659faba2b703dd8f3d
//OMDB api key: 40e9cece


