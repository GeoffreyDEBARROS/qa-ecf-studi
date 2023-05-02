const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "ROOT",
  database: "quai_antique_db",
});

///   Route POST pour ajouter un client dans la base de données   ///
router.post("/users", (req, res) => {
  const { name, email, password, default_guests } = req.body;
  console.log(req.headers["content-type"])
  // Vérifier que le mot de passe a au moins 8 caractères, avec au moins un chiffre et une majuscule
  const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
  if (!passwordRegex.test(password)) {
    res.status(400).json({
      error:
        "Le mot de passe doit contenir au moins 8 caractères, avec au moins un chiffre et une majuscule",
    });
    return;
  }
  
  // Générer un sel pour le hachage
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      console.error("Erreur lors de la génération du sel :", err);
      res.status(500).json({ error: "Erreur lors de la création du compte" });
      return;
    }

    // Hacher le mot de passe avec le sel généré
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        console.error("Erreur lors du hachage du mot de passe :", err);
        res.status(500).json({ error: "Erreur lors de la création du compte" });
        return;
      }

      // Requête SQL pour ajouter le client avec le mot de passe hashé dans la base de données
      const sql =
        "INSERT INTO users (name, email, password, default_Guests) VALUES (?, ?, ?, ?)";
      db.query(sql, [name, email, hash, default_guests], (err, result) => {
        if (err) {
          console.error("Erreur lors de l'ajout du client :", err);
          res
            .status(500)
            .json({ error: "Erreur lors de la création du compte" });
          return;
        }
        console.log("Client ajouté avec succès !");
      });
    });
  });
});

///   Route POST pour le LOGIN d'un client   ///
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  // Requête SQL pour récupérer le client en fonction de son email
  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error("Erreur lors de la récupération du client :", err);
      res.status(500).json({ error: "Erreur lors de la connexion" });
      return;
    }

    // Vérifier si le client existe
    if (results.length === 0) {
      res.status(404).json({ error: "Utilisateur non trouvé" });
      return;
    }

    // Comparer le mot de passe fourni avec le mot de passe stocké dans la base de données
    bcrypt.compare(password, results[0].password, (err, isMatch) => {
      if (err) {
        console.error("Erreur lors de la comparaison des mots de passe :", err);
        res.status(500).json({ error: "Erreur lors de la connexion" });
        return;
      }

      // Vérifier si les mots de passe correspondent
      if (!isMatch) {
        res.status(401).json({ error: "Mot de passe incorrect" });
        return;
      }

      // Les mots de passe correspondent, générer un token d'authentification
      // et renvoyer les informations du client connecté
      const { id, email, default_guests, name } = results[0];
      const token = jwt.sign({ id, email }, secretKey, { expiresIn: "1h" });
      res.json({ token, id, email, default_guests, name });
    });
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
