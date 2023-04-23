const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "ROOT",
  database: "quai_antique_db",
});

///   Route POST pour ajouter un client dans la base de données   ///
router.post("/users", (req, res) => {
  const { email, password, default_guests, name } = req.body; // Récupérer les données à partir du corps de la requête
  // email = "Geoff@gmail.com";
  // password = "motdepassenul";
  // default_guests = 4;
  // name = "Geoff";
  const sql =
    "INSERT INTO users (email, password, default_Guests, name) VALUES (?, ?, ?, ?)";
  db.query(sql, [email, password, default_guests, name], (err, result) => {
    if (err) {
      console.error("Erreur lors de l'ajout du client :", err);
      res.status(500).json({ error: "Erreur lors de l'ajout du client" });
      return;
    }
    console.log("Client ajouté avec succès !");
    res.json({ message: "Client ajouté avec succès !" });
  });
});

///   Route GET pour récupérer un client par son ID dans la base de données   ///
router.get("/users/:id", (req, res) => {
  const usersId = req.params.id; // Récupérer l'ID du client à partir des paramètres de la requête
  const sql = "SELECT * FROM users WHERE id = ?";
  db.query(sql, [usersId], (err, result) => {
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
router.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";
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
    console.log("Client récupéré avec succès");
    res.json({ client });
  });
});

///   Route DELETE pour supprimer un client par son ID dans la base de données   ///
router.delete("/users/:id", (req, res) => {
  const clientId = req.params.id; // Récupérer l'ID du client à partir des paramètres de la requête
  const sql = "DELETE FROM users WHERE id = ?";
  db.query(sql, [clientId], (err, result) => {
    // Passer l'ID du client comme paramètre dans la requête SQL
    if (err) {
      console.error("Erreur lors de la suppression du client :", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la suppression du client" });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Client non trouvé" });
      return;
    }
    console.log("Client supprimé avec succès. ID :", clientId);
    res.json({ success: "Client supprimé avec succès" });
  });
});

///   Route UPDATE pour modifier un client par son ID dans la base de données   ///
router.put("/users/:id", (req, res) => {
  const userId = req.params.id; // Récupérer l'ID du client à partir des paramètres de la requête
  const { email, password, default_guests, name } = req.body; // Récupérer les nouvelles informations du client à partir du corps de la requête

  // Vérifier si les informations obligatoires sont présentes
  if (!email || !password || !name) {
    res.status(400).json({ error: "Tous les champs sont obligatoires" });
    return;
  }

  const sql =
    "UPDATE users SET email = ?, password = ?, default_guests = ?, name = ? WHERE id = ?";
  db.query(
    sql,
    [email, password, default_guests, name, userId],
    (err, result) => {
      // Passer les nouvelles informations du client comme paramètres dans la requête SQL
      if (err) {
        console.error("Erreur lors de la mise à jour du client :", err);
        res
          .status(500)
          .json({ error: "Erreur lors de la mise à jour du client" });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ error: "Client non trouvé" });
        return;
      }
      console.log("Client mis à jour avec succès");
      res.json({ message: "Client mis à jour avec succès" });
    }
  );
});

module.exports = router;
