# PFE - M2 Informatique E-Services

## Sujet - Analyse de traces d'usage d'un outil


L'équipe Carbon a réalisé un plugin pour IntelliJ et Android Studio permettant d’afficher en live dans une page web le diagramme de classes correspondant au code Java affiché dans l’IDE, ainsi que le diagramme de séquence de la méthode courante. Cet fonctionne grâce à des messages au format JSON. Ces messages contiennent beaucoup d'informations ainsi qu'un identifiant d'action, permettant de les catégoriser. Ces messages sont stockés dans une base de données et servent à analyser le comportement du développeur lorsqu'il utilise notre outil. Nous avons actuellement des milliers de messages et nous cherchons à les exploiter de façon graphique et interactive au travers d'un outil web.

### Les commandes :

**Pour lancer l'application :**
```
nodemon server.js
```

### Pour accéder aux différentes catégories, les URL sont les suivants :

**Pour accéder à la catégorie application et y voir les graphes de tout type affichant chaque application avec le nombre d'utilisations de cette dernière :**
```
http://localhost:3080/application
```

**Pour accéder à la catégorie date et y voir les graphes de tout type affichant chaque date avec le nombre d'utilisations de cette dernière :**
```
http://localhost:3080/date
```

**Pour accéder à la catégorie session et y voir les graphes de tout type affichant chaque session avec le nombre d'utilisations de cette dernière :**
```
http://localhost:3080/session
```

**Pour accéder à la catégorie source et y voir les graphes de tout type affichant chaque source avec le nombre d'utilisations de cette dernière :**
```
http://localhost:3080/source
```

**Pour accéder à la catégorie version et y voir les graphes de tout type affichant chaque version avec le nombre d'utilisations de cette dernière :**
```
http://localhost:3080/version
```

**Pour accéder à la catégorie projectSession et y voir les graphes de tout type affichant chaque projectSession avec le nombre d'utilisations de cette dernière :**
```
http://localhost:3080/projectSession
```


Le fichier server.js contient principalement des codes pour l'extraction des données de la base de données MongoDB à l'aide d'ExpressJS et les rediriger vers le dossier View contenant l'ensemble des vues pour chaque catégorie.
