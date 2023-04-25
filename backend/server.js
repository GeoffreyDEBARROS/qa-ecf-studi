const mysql = require("mysql");
const express = require("express");
const usersRouter = require("./routes/usersRoutes");
const startersRouter = require("./routes/startersRoutes");
const dishesRouter = require("./routes/dishesRoutes");
const dessertsRouter = require("./routes/dessertsRoutes");
const scheduleRouter = require("./routes/scheduleRoutes");



const port = 3001;
const app = express();

app.use(express.json()); // Middleware pour le parsing du corps de la requête en JSON

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
