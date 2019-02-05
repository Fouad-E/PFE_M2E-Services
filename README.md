# PFE_M2E-Services
Avant de lancer le projet , il faut d'abord démarrer la base de donnée MongoDB avec les commande :
 
   1.mongod  
   2.mongo
   
Par la suite , utiliser la commande : nodemon server.js pour lancer le projet , vous serez redirigé vers localhost:3080 .
Vous pouvez utiliser les URL suivants pour accéder aux catégories :
- http://localhost:3080/application : pour accéder à la catégorie application et y voir les graphes de tout type affichant chaque application avec le nombre d'utilisations de cette dernière.
- http://localhost:3080/date :  pour accéder à la catégorie date et y voir les graphes de tout type affichant chaque date avec le nombre d'utilisations de cette dernière.
- http://localhost:3080/session :  pour accéder à la catégorie session et y voir les graphes de tout type affichant chaque session avec le nombre d'utilisations de cette dernière.
- http://localhost:3080/source :  pour accéder à la catégorie source et y voir les graphes de tout type affichant chaque source avec le nombre d'utilisations de cette dernière.
- http://localhost:3080/version : pour accéder à la catégorie version et y voir les graphes de tout type affichant chaque version avec le nombre d'utilisations de cette dernière.
- http://localhost:3080/projectSession : pour accéder à la catégorie projectSession et y voir les graphes de tout type affichant chaque projectSession avec le nombre d'utilisations de cette dernière.

Le fichier server.js est le fichier qui contient le code principal pour l'extraction des données de la base de données MongoDB avec Express JS et les rediriger vers le dossier View qui contient l'ensemble de nos vues par rapport à chaque catégorie.
