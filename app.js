var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

var list = [];

app.get('/listActiveMachines', function (req, res) {
  
  res.json( list );
  
});

app.get('/getNewMachine/:ip', function (req, res) {
  list.push( req.params.ip );
  res.end( req.params.ip );
});

app.get('/deleteMachine/:ip', function (req, res) {
  var index = list.indexOf( req.params.ip );
  if ( index == -1 )
	res.end( "Failed to remove. No such machine with that IP." )
  else
  {
	list.splice( index, 1 );
	res.end( "Machine deletion was successful" );
  }
});

app.listen( port );
console.log('Achilleas\' API listening on port ' + port);