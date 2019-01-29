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

app.get('/application', async (req, res) => {
	console.log("Avant recuperation des données");
	console.log("En cours");
	var applicationsResult = [];
	var applicationsCount=[];

	await db.collection('wsedump').distinct("data.application", {}, (async function(err, DataApplication){
		console.log(("----------------------------"));
		console.log(("Application"));
		if(err){
		    return console.log(err);
		}
		if(DataApplication){
		    console.log("Application : "+DataApplication);
		    applicationsResult = DataApplication;
		    console.log("length of sessions : "+applicationsResult.length);
			console.log("Apres recuperation des données");
			for(var i=0;i<applicationsResult.length;i++){
				 let tmp = db.collection('wsedump');
				 applicationsCount[i] = await tmp.countDocuments({'data.application': applicationsResult[i]});
				console.log("well");

			}

		res.render('application.ejs', {applications : applicationsResult , nombres : applicationsCount});
				console.log("Length of datasResult : "+applicationsResult.length);
		return DataApplication;
	}}))
})




app.get('/date', async (req, res) => {
	console.log("Avant recuperation des données");
	console.log("En cours");
	var datesResult = [];
	var datesCount=[];

	await db.collection('wsedump').distinct("date", {}, (async function(err, DataApplication){
		console.log(("----------------------------"));
		console.log(("Dates"));
		if(err){
		    return console.log(err);
		}
		if(DataApplication){
		    console.log("Dates : "+DataApplication);
		    datesResult = DataApplication;
		    console.log("length of dates : "+datesResult.length);
			console.log("Apres recuperation des données");
			for(var i=0;i<datesResult.length;i++){
				 let tmp = db.collection('wsedump');
				 datesCount[i] = await tmp.countDocuments({'date': datesResult[i]});
				console.log("well");

			}

		res.render('date.ejs', {dates : datesResult , nombres : datesCount});
				console.log("Length of datasResult : "+datesResult.length);
		return DataApplication;
	}}))
})

app.get('/projectSession', async (req, res) => {
	console.log("Avant recuperation des données");
	console.log("En cours");
	var projectSessionResult = [];
	var projectSessionCount=[];

	await db.collection('wsedump').distinct("data.projectSession", {}, (async function(err, DataApplication){
		console.log(("----------------------------"));
		console.log(("Dates"));
		if(err){
		    return console.log(err);
		}
		if(DataApplication){
		    console.log("Sessions : "+DataApplication);
		    projectSessionResult = DataApplication;
		    console.log("length of sessions : "+projectSessionResult.length);
			console.log("Apres recuperation des données");
			for(var i=0;i<projectSessionResult.length;i++){
				 let tmp = db.collection('wsedump');
				 projectSessionCount[i] = await tmp.countDocuments({'data.projectSession': projectSessionResult[i]});
				console.log("well");

			}

		res.render('date.ejs', {projectSessions : projectSessionResult , nombres : projectSessionCount});
				console.log("Length of datasResult : "+projectSessionResult.length);
		return DataApplication;
	}}))
})


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

app.get('/source', async (req, res) => {
	console.log("Avant recuperation des données");
	console.log("En cours");
	var sourcesResult = [];
	var sourcesCount=[];

	await db.collection('wsedump').distinct("source", {}, (async function(err, DataApplication){
		console.log(("----------------------------"));
		console.log(("Source"));
		if(err){
		    return console.log(err);
		}
		if(DataApplication){
		    console.log("Sources : "+DataApplication);
		    sourcesResult = DataApplication;
		    console.log("length of sources : "+sourcesResult.length);
			console.log("Apres recuperation des données");
			for(var i=0;i<sourcesResult.length;i++){
				 let tmp = db.collection('wsedump');
				 sourcesCount[i] = await tmp.countDocuments({'source': sourcesResult[i]});
				console.log("well");

			}

		res.render('source.ejs', {sources : sourcesResult , nombres : sourcesCount});
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
		    versionsResult = DataApplication;
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
