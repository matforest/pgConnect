var pg = require('pg');
var conString = "postgres://munt:pass@localhost:5432/geodata";

var client = new pg.Client(conString);
console.log('connecting');
client.connect(afterConnect);
console.log('connected');


function afterConnect(err) {

	console.log('afterConnect err: ', err);
	if (err) {
		throw err;
	}

	console.log('querying');
	var query = client.query("SELECT * FROM testing.temp;");
	console.log('query done');

	query.on('row', function(row) {
		console.log(row);
	});
	
	query.on('error', function(err) {
		console.log('Error: ' + err);
	});
	
	query.on('end', function() { 
	  client.end();
	});
	
	console.log('afterConnect done');

}