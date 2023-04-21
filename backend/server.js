const mysql = require("mysql");
const express = require("express");

const port = 3001;
const app = express();

app.use(express.json()); // Middleware pour le parsing du corps de la requête en JSON

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

///   Route POST pour ajouter un client dans la base de données   ///
app.post("/clients", (req, res) => {
  // const { email, password, default_guests, allergies, name } = req.body; // Récupérer les données à partir du corps de la requête
  email = "Geoff@gmail.com";
  password = "123abc";
  default_guests = 4;
  allergies = "Frites";
  name = "Geoff";
  const sql =
    "INSERT INTO clients (email, password, default_Guests, allergies, name) VALUES (?, ?, ?, ?, ?)";
  db.query(
    sql,
    [email, password, default_guests, allergies, name],
    (err, result) => {
      if (err) {
        console.error("Erreur lors de l'ajout du client :", err);
        res.status(500).json({ error: "Erreur lors de l'ajout du client" });
        return;
      }
      console.log("Client ajouté avec succès !");
      res.json({ message: "Client ajouté avec succès !" });
    }
  );
});

///   Route GET pour récupérer un client par son ID dans la base de données   ///
app.get("/clients/:id", (req, res) => {
  const clientId = req.params.id; // Récupérer l'ID du client à partir des paramètres de la requête
  const sql = "SELECT * FROM clients WHERE id = ?";
  db.query(sql, [clientId], (err, result) => {
    // Passer l'ID du client comme paramètre dans la requête SQL
    if (err) {
      console.error("Erreur lors de la récupération du client :", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération du client" });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ error: "Client non trouvé" });
      return;
    }
    const client = result[0]; // Récupérer le premier résultat du résultat de la requête
    console.log("Client récupéré avec succès :", client);
    res.json({ client });
  });
});

///   Route GET pour récupérer TOUS les client dans la base de données   ///
app.get("/clients", (req, res) => {
  const sql = "SELECT * FROM clients";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Erreur lors de la récupération du client :", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération du client" });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ error: "Client non trouvé" });
      return;
    }
    const client = result; 
    console.log("Client récupéré avec succès :", client);
    res.json({ client });
  });
});

///   Route DELETE pour supprimer un client par son ID dans la base de données   ///
app.delete("/clients/:id", (req, res) => {
  const clientId = req.params.id; // Récupérer l'ID du client à partir des paramètres de la requête
  const sql = "SELECT * FROM clients WHERE id = ?";
  db.query(sql, [clientId], (err, result) => {
    // Passer l'ID du client comme paramètre dans la requête SQL
    if (err) {
      console.error("Erreur lors de la récupération du client :", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération du client" });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ error: "Client non trouvé" });
      return;
    }
    const client = result[0]; // Récupérer le premier résultat du résultat de la requête
    console.log("Client récupéré avec succès :", client);
    res.json({ client });
  });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
