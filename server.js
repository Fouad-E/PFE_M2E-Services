/*Bibliothèque pour utiliser le framework Express JS*/
const express = require('express');
const app = express();
/*Bibliothèque pour utiliser la base de données MongoDB*/
const MongoClient = require('mongodb').MongoClient;


var db
var res
/*Pour se connecter à la base de donnée*/
MongoClient.connect('mongodb://127.0.0.1:27017', (err, client) => {
  if (err) return console.log(err)
  db = client.db('wse') // whatever your database name is
  app.listen(3080, () => {
    console.log('listening on 3080')
  })
})

/*Envoyer les données vers le dossier /view qui contient les fichiers d'extension ejs*/
console.log("avant definition render view engine");
app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');


/*Methode GET pour récupérer la catégorie application */
app.get('/', async (req, res) => {
	console.log("Avant recuperation des données");
	console.log("En cours");


		res.render('index.ejs');
})



/*Methode GET pour récupérer la catégorie application */
app.get('/application', async (req, res) => {
	console.log("Avant recuperation des données");
	console.log("En cours");
	var applicationsResult = [];
	var applicationsCount=[];
  var rgbas = [];

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
         rgbas[i] = 'rgba('+(Math.floor(Math.random() * 255)+0)+','+(Math.floor(Math.random() * 255)+0)+','+(Math.floor(Math.random() * 255) + 0)+',0.6)';
				console.log("well");

			}

		res.render('application.ejs', {applications : applicationsResult , nombres : applicationsCount, rgbas : rgbas});
				console.log("Length of datasResult : "+applicationsResult.length);
		return DataApplication;
	}}))
})



/*Methode GET pour récupérer la catégorie date */
app.get('/date', async (req, res) => {
	console.log("Avant recuperation des données");
	console.log("En cours");
	var datesResult = [];
	var datesCount=[];
  var rgbas = [];


	await db.collection('wsedump').distinct("date", {}, (async function(err, DataDate){
		console.log(("----------------------------"));
		console.log(("Dates"));
		if(err){
		    return console.log(err);
		}
		if(DataDate){
		    console.log("Dates : "+DataDate);
		    datesResult = DataDate;
		    console.log("length of dates : "+datesResult.length);
			console.log("Apres recuperation des données");
			for(var i=0;i<datesResult.length;i++){
				 let tmp = db.collection('wsedump');
				 datesCount[i] = await tmp.countDocuments({'date': datesResult[i]});
         rgbas[i] = 'rgba('+(Math.floor(Math.random() * 255)+0)+','+(Math.floor(Math.random() * 255)+0)+','+(Math.floor(Math.random() * 255) + 0)+',0.6)';
         console.log("well");

			}

		res.render('date.ejs', {dates : datesResult , nombres : datesCount, rgbas : rgbas});
				console.log("Length of datasResult : "+datesResult.length);
		return DataDate;
	}}))
})

/*Methode GET pour récupérer la catégorie projectSession */
app.get('/projectSession', async (req, res) => {
	console.log("Avant recuperation des données");
	console.log("En cours");
	var projectSessionResult = [];
	var projectSessionCount=[];
  var rgbas = [];


	await db.collection('wsedump').distinct("data.projectSession", {}, (async function(err, DataProjectSession){
		console.log(("----------------------------"));
		console.log(("Dates"));
		if(err){
		    return console.log(err);
		}
		if(DataProjectSession){
		    console.log("projectSessions : "+DataProjectSession);
		    projectSessionResult = DataProjectSession;
		    console.log("length of projectSession : "+projectSessionResult.length);
			console.log("Apres recuperation des données");
			for(var i=0;i<projectSessionResult.length;i++){
				 let tmp = db.collection('wsedump');
				 projectSessionCount[i] = await tmp.countDocuments({'data.projectSession': projectSessionResult[i]});
         rgbas[i] = 'rgba('+(Math.floor(Math.random() * 255)+0)+','+(Math.floor(Math.random() * 255)+0)+','+(Math.floor(Math.random() * 255) + 0)+',0.6)';

         console.log("well");

			}

		res.render('projectSession.ejs', {projectSessions : projectSessionResult , nombres : projectSessionCount, rgbas : rgbas});
				console.log("Length of datasResult : "+projectSessionResult.length);
		return DataProjectSession;
	}}))
})

/*Methode GET pour récupérer la catégorie session */
app.get('/session', async (req, res) => {
	console.log("Avant recuperation des données");
	console.log("En cours");
	var sessionsResult = [];
	var sessioncount=[];
  var rgbas = [];


	await db.collection('wsedump').distinct("session", {}, (async function(err, DataSession){
		console.log(("----------------------------"));
		console.log(("Session"));
		if(err){
		    return console.log(err);
		}
		if(DataSession){
		    console.log("Sessions : "+DataSession);
		    sessionsResult = DataSession;
		    console.log("length of sessions : "+sessionsResult.length);
			console.log("Apres recuperation des données");
			for(var i=0;i<sessionsResult.length;i++){
				 let tmp = db.collection('wsedump');
				 sessioncount[i] = await tmp.countDocuments({'session': sessionsResult[i]});
         rgbas[i] = 'rgba('+(Math.floor(Math.random() * 255)+0)+','+(Math.floor(Math.random() * 255)+0)+','+(Math.floor(Math.random() * 255) + 0)+',0.6)';
         console.log("well");

			}

		res.render('session.ejs', {sessions : sessionsResult , nombres : sessioncount, rgbas : rgbas});
				console.log("Length of datasResult : "+sessionsResult.length);
		return DataSession;
	}}))
})

/*Methode GET pour récupérer la catégorie source */
app.get('/source', async (req, res) => {
	console.log("Avant recuperation des données");
	console.log("En cours");
	var sourcesResult = [];
	var sourcesCount=[];
  var rgbas = [];


	await db.collection('wsedump').distinct("source", {}, (async function(err, DataSource){
		console.log(("----------------------------"));
		console.log(("Source"));
		if(err){
		    return console.log(err);
		}
		if(DataSource){
		    console.log("Sources : "+DataSource);
		    sourcesResult = DataSource;
		    console.log("length of sources : "+sourcesResult.length);
			console.log("Apres recuperation des données");
			for(var i=0;i<sourcesResult.length;i++){
				 let tmp = db.collection('wsedump');
				 sourcesCount[i] = await tmp.countDocuments({'source': sourcesResult[i]});
         rgbas[i] = 'rgba('+(Math.floor(Math.random() * 255)+0)+','+(Math.floor(Math.random() * 255)+0)+','+(Math.floor(Math.random() * 255) + 0)+',0.6)';

         console.log("well");

			}

		res.render('source.ejs', {sources : sourcesResult , nombres : sourcesCount, rgbas : rgbas});
				console.log("Length of datasResult : "+sourcesResult.length);
		return DataSource;
	}}))
})

/*Methode GET pour récupérer la catégorie version */
app.get('/version', async (req, res) => {
	console.log("Avant recuperation des données");
	console.log("En cours");
	var versionsResult = [];
	var versioncount=[];
  var rgbas = [];


	await db.collection('wsedump').distinct("data.version", {}, (async function(err, DataVersion){
		console.log(("----------------------------"));
		console.log(("Version"));
		if(err){
		    return console.log(err);
		}
		if(DataVersion){
		    console.log("Versions : "+DataVersion);
		    versionsResult = DataVersion;
		    console.log("length of versions : "+versionsResult.length);
			console.log("Apres recuperation des données");
			for(var i=0;i<versionsResult.length;i++){
				 let tmp = db.collection('wsedump');
				 versioncount[i] = await tmp.countDocuments({'data.version': versionsResult[i]});
         rgbas[i] = 'rgba('+(Math.floor(Math.random() * 255)+0)+','+(Math.floor(Math.random() * 255)+0)+','+(Math.floor(Math.random() * 255) + 0)+',0.6)';

         console.log("well");

			}

		res.render('version.ejs', {versions : versionsResult , nombres : versioncount, rgbas : rgbas});
				console.log("Length of datasResult : "+versionsResult.length);
		return DataVersion;
	}}))

})


/*Methode GET pour récupérer la catégorie application */
app.get('/timestamp', async (req, res) => {
	console.log("Avant recuperation des données");
	console.log("En cours");
	var timestampResult = [];
	var timestampCount=[];
  var rgbas = [];


	await db.collection('wsedump').distinct("timestamp", {}, (async function(err, DataTimestamp){
		console.log(("----------------------------"));
		console.log(("Timestamp"));
		if(err){
		    return console.log(err);
		}
		if(DataTimestamp){
		    console.log("Timestamp : "+DataTimestamp);
		    timestampResult = DataTimestamp;
		    console.log("length of timestamps : "+timestampResult.length);
			console.log("Apres recuperation des données");
			for(var i=0;i<timestampResult.length;i++){
				 let tmp = db.collection('wsedump');
				 timestampCount[i] = await tmp.countDocuments({'timestamp': timestampResult[i]});
         rgbas[i] = 'rgba('+(Math.floor(Math.random() * 255)+0)+','+(Math.floor(Math.random() * 255)+0)+','+(Math.floor(Math.random() * 255) + 0)+',0.6)';

         console.log("well");

			}

		res.render('timestamp.ejs', {timestamps : timestampResult , nombres : timestampCount, rgbas : rgbas});
				console.log("Length of datasResult : "+timestampResult.length);
		return DataTimestamp;
	}}))
})
