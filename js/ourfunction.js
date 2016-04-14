window.addEventListener('load',function(){
		var socket = io.connect('http://127.0.0.1:8081');
		socket.on('user', function(tweet){
		$('#tweetd').after( '<div class="tweetd">User: &nbsp &nbsp &nbsp &nbsp'+ tweet+'</div>');
		});
		socket.on('text', function(tweettext){
		    $('#tweetd').after('<div class="tweettext">Tweeted: ' +tweettext+ '</div>');
		});
		socket.on('created', function(tweetdate){
		    $('#tweetd').after('<div class="tweetdate">Created: &nbsp' +tweetdate+ '</div>' + '<br>');
		});
		socket.on('you', function(post){
		$('#yourname').after( '<div class="yourname">User: &nbsp &nbsp &nbsp &nbsp'+ post +'</div>');
		});
		socket.on('posted', function(posttext){
		    $('#yourtweet').after('<div class="yourtweet">Tweeted: ' +posttext+ '</div>');
		});
		socket.on('name', function(getName){
		    $('#Name').after('<div class="Name">User: ' +getName+ '</div>' + '<br>');
		});
		socket.on('screenName', function(getSName){
		    $('#sName').after('<div class="sName">Screen Name: ' +getSName+ '</div>' + '<br>');
		});
		socket.on('location', function(getLoc){
		    $('#loc').after('<div class="loc">Location: ' +getLoc+ '</div>' + '<br>');
		});
		socket.on('description', function(getDesc){
		    $('#desc').after('<div class="desc">Description: ' +getDesc+ '</div>' + '<br>');
		});
		socket.on('friends', function(getFriends){
		    $('#friends').after('<div class="friends">Friends: ' +getFriends+ '</div>' + '<br>');
		});
		socket.on('followers', function(getFollow){
		    $('#follow').after('<div class="follow">followers: ' +getFollow+ '</div>' + '<br>');
		});
		socket.on('lastStat', function(getLast){
		    $('#last').after('<div class="last">Last Status: ' +getLast+ '</div>' + '<br>');
		});
		socket.on('accCreate', function(getAccC){
		    $('#accCreated').after('<div class="accCreated">Account Created: ' +getAccC+ '</div>' + '<br>');
		});
});