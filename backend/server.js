const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const usersRouter = require("./routes/usersRoutes");
const startersRouter = require("./routes/startersRoutes");
const dishesRouter = require("./routes/dishesRoutes");
const dessertsRouter = require("./routes/dessertsRoutes");
const scheduleRouter = require("./routes/scheduleRoutes");
require("dotenv").config();

/// "code qui affichera l'application React lorsqu'elle sera sollicitée par l'utilisateur."  ///
const path = require('path');
// Pour demander à Node de servir les fichiers à partir du build de React
app.use(express.static(path.resolve(__dirname, '../quai-antique-test/build')));

const port = 3001;
const app = express();

app.use(express.json()); // Middleware pour le parsing du corps de la requête en JSON

app.use(cors());

app.use(usersRouter);
app.use(startersRouter);
app.use(dishesRouter);
app.use(dessertsRouter);
app.use(scheduleRouter);

// Créer une connexion à la base de données
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "ROOT",
  database: "quai_antique_db",
});

// const urlDB = `mysql://root:oAfrNFzZWZ0ajP4xWm8e@containers-us-west-126.railway.app:7171/railway`;

// const db = mysql.createConnection(urlDB);

// Connecter à la base de données
db.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données :", err);
    return;
  }
  console.log("Connecté à la base de données MySQL.");
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
