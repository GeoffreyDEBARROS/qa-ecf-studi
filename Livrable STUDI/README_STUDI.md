# quai-antique-ECF

Importer la base de données MySQL :

Dans le dossier « Livrable STUDI », se trouve un fichier « base_de_donnee.sql », vous aurez besoin de l’importer dans votre propre base de données.
Pour cela, entrez dans votre terminale cette commande :
mysql -u root -p quai_antique_db < base_de_donnee.sql

Nom d’utilisateur MySQL : root
Mot de passe : ROOT
Nom de la DB : quai_antique_db
Port MySQL utilisé : 3306



Pour lancer le serveur, rendez vous dans le sous-dossier « backend » depuis un terminal et lancer la commande « node server.js ».
Un message dans le terminal vous indique que le serveur est bien lancé.

Pour lancer l’application React, dans une autre fenêtre de terminal, depuis le dossier « quai-antique », lancer la commande « npm start ».


// Compte client  //

Pour tester une connexion, il y as déja des utilisateurs dans la base de données. Vous pouvez par exemple utilisé :
email : yoda@gmail.com  mdp : Abcd1234
email : carapuce@gmail.com  mdp : Abcd1234

Vous pouvez aussi créer un compte en entrant une adresse mail fictive, un nom, un nombre de convives moyen et un mot de passe contenant au moins 8 caracères, dont au moin un chiffre et une majuscule.

Vous pouvez modifier les informations du compte connecter en cliquant sur l'icône en haut à gauche du site. Une déco/reco est nécessaire pour voir apparaitre les modifications.

Pour faire une réservation, cliqué sur le bouton « RESERVER », puis sélectionner une date, une heure et un nombre de convive. Si vous n’êtes pas connecté, entrer une adresse mail.
S’il y as déjà une réservation a la date et l’heure choisis, il sera impossible d’en faire une nouvelle.

 
 // Compte admin  //

Pour vous connecter en tant qu'administrateur, utiliser le compte admin déja existant:
email : admin@gmail.com
mdp : Admin1234

Une fois connecter, un bouton « admin » apparait en haut du site. Cliqué sur ce dernier pour arriver sur la page d’administration.
Depuis cette page, vous pouvez modifier la carte et les horaires du restaurant, ainsi que consulter et supprimer les réservations.

