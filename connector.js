var pg = require('pg');
var conString = "postgres://munt:pass@192.168.1.1:5432/geodata";

var client = new pg.Client(conString);
console.log('connecting');
client.connect(afterConnect);
console.log('connected');


function afterConnect(err) {

	console.log('afterConnect err: ' + err);
	if (err) {
		throw err;
	}

	//var query = client.query("SELECT * FROM testing.temp;");
	console.log('querying');
	var query = client.query("fart fart fart;");
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