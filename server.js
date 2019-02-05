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



/*Methode GET pour récupérer la catégorie date */
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

/*Methode GET pour récupérer la catégorie projectSession */
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

		res.render('projectSession.ejs', {projectSessions : projectSessionResult , nombres : projectSessionCount});
				console.log("Length of datasResult : "+projectSessionResult.length);
		return DataApplication;
	}}))
})

/*Methode GET pour récupérer la catégorie session */
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

/*Methode GET pour récupérer la catégorie source */
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

/*Methode GET pour récupérer la catégorie version */
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
