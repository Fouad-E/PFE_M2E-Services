const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;


var db
var res

MongoClient.connect('mongodb://127.0.0.1:27017', (err, client) => {
  if (err) return console.log(err)
  db = client.db('wse') // whatever your database name is
  app.listen(3080, () => {
    console.log('listening on 3080')
  })
})

/*
app.get('/', (req, res) => {
	  var cursor = db.collection('wsedump').find().toArray(function(err, results) {
	  console.log("debut recuperation des données");
	  res = results;
	  console.log("fin recuperation des données");
	  console.log("resultats : ");
	  console.log(results);
	  // send HTML file populated with quotes here
	})
})
*/

console.log("avant definition render view engine");
app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');


/*
app.get('/', (req, res) => {
  console.log("Avant recuperation des données");
  console.log("En cours");
  db.collection('wsedump').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    console.log("Apres recuperation des données");
    console.log(result[0].data.application);
    console.log(result[0].data.projectSession);
    console.log(result[0].data.version);
    res.render('index.ejs', {messages: result});
    console.log("well");
  })
})
*/


app.get('/application', (req, res) => {
	console.log("Avant recuperation des données");
	console.log("En cours");
	var labelsResult = [];
	db.collection('wsedump').distinct("data.application", {}, (function(err, DataApplication){
		console.log(("----------------------------"));
		console.log(("LABELS"));
		if(err){
		    return console.log(err);
		}
		if(DataApplication){
		    console.log("Labels : "+DataApplication);
		    labelsResult = DataApplication;
		    console.log("length of labels : "+labelsResult.length);

/*	
		console.log(("----------------------------"));
		console.log(("COUNT"));
		var datasResult = [];


		function loadDatasCount(callback) {
		  
			for(var i=0; i<labels.length;i++){
				console.log("label "+i+" : "+labels[i]);

				db.collection('wsedump').find({'data.application':labels[i]}).count(function (err, count) {
					if(err) {
						return console.log(err);
					}
					console.log("count : "+count);
					datasResult.push(count);
					return count;
				});

			}
			
			console.log("lgt : "+datasResult.length);
			callback();
		}

		function loadPageHTML(){
			console.log("Apres recuperation des données");
			res.render('index.ejs', {labels : DataApplication, datas : datasResult});
			console.log("well");
			console.log("Length of datasResult : "+datasResult.length);		
		}

		loadDatasCount(loadPageHTML);
*/


		/* COUNT LABEL APPLICATION */
		console.log("Apres recuperation des données");
		res.render('application.ejs', {labels : labelsResult});
		console.log("well");
		console.log("Length of datasResult : "+labelsResult.length);				
		return DataApplication;
	}

	console.log("x");
	db.collection('wsedump').find({}, {"data.application" : 1, "_id" : 0}), (function(err, result){
		console.log("y");
		for(var i=0; i<result.length; i++){
			console.log("1");
		}
	});
		
		/*for(var i=0; i<DataApplication.length; i++){
			console.log(DataApplication[i].
		}*/
		

	}));
})


app.get('/date', (req, res) => {
	console.log("Avant recuperation des données");
	console.log("En cours");
	var sessionsResult = [];
	db.collection('wsedump').distinct("date",{}, (function(err, DataApplication){
		console.log(("----------------------------"));
		console.log(("Date"));
		if(err){
		    return console.log(err);
		}
		if(DataApplication){
		    console.log("Dates : "+DataApplication);
		    sessionsResult = DataApplication;
		    console.log("length of dates : "+sessionsResult.length);
			console.log("Apres recuperation des dates");
			res.render('date.ejs', {dates : sessionsResult});
			console.log("well");
			console.log("Length of datasResult : "+sessionsResult.length);			
			return DataApplication;
	}}))
})


	function getCount(key){
		db.collection('wsedump').countDocuments({'session': key},(function(err,count){
				if(err){
					return console.log("erreur dans le count");
				}
				if(count){
					console.log(count);	
					return count;
				}	
			}))		
	}


app.get('/session', async (req, res) => {
	console.log("Avant recuperation des données");
	console.log("En cours");
	var sessionsResult = [];
	var sessioncount=[];
	
	await db.collection('wsedump').distinct("session", {}, (async function(err, DataApplication){
		console.log(("----------------------------"));
		console.log(("Session"));
		if(err){
		    return console.log(err);
		}
		if(DataApplication){
		    console.log("Sessions : "+DataApplication);
		    sessionsResult = DataApplication;
		    console.log("length of sessions : "+sessionsResult.length);
			console.log("Apres recuperation des données");			
			for(var i=0;i<sessionsResult.length;i++){
				 let tmp = db.collection('wsedump');
				 sessioncount[i] = await tmp.countDocuments({'session': sessionsResult[i]});
				console.log("well");

			}
			
		res.render('session.ejs', {sessions : sessionsResult , nombres : sessioncount});
				console.log("Length of datasResult : "+sessionsResult.length);		  
		return DataApplication;
	}}))
})

	/*		
	      for(var i=0;i<sessionsResult.length;i++){
			sessioncount = db.collection('wsedump').find({"session":sessionsResult[i]}).count();
			console.log("le calcul est fait");
		   if (typeof sessioncount[i] !== "undefined"   &&  sessioncount[i]  !== "undefined") {
			console.log("nombre : " + sessioncount[i]);*/
//JSON.parse(JSON.stringify(sessioncount))
app.get('/version', async (req, res) => {
	console.log("Avant recuperation des données");
	console.log("En cours");
	var versionsResult = [];
	var versioncount=[];
	
	await db.collection('wsedump').distinct("data.version", {}, (async function(err, DataApplication){
		console.log(("----------------------------"));
		console.log(("Version"));
		if(err){
		    return console.log(err);
		}
		if(DataApplication){
		    console.log("Versions : "+DataApplication);
		    sversionsResult = DataApplication;
		    console.log("length of versions : "+versionsResult.length);
			console.log("Apres recuperation des données");			
			for(var i=0;i<versionsResult.length;i++){
				 let tmp = db.collection('wsedump');
				 versioncount[i] = await tmp.countDocuments({'data.version': versionsResult[i]});
				console.log("well");

			}
			
		res.render('version.ejs', {versions : versionsResult , nombres : versioncount});
				console.log("Length of datasResult : "+versionsResult.length);		  
		return DataApplication;
	}}))

})
