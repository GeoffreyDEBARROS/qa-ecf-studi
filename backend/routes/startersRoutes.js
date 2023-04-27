const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "ROOT",
  database: "quai_antique_db",
});

///   Route POST pour ajouter une entrée dans la base de données   ///
router.post("/starters", (req, res) => {
  const { starter, price } = req.body; // Récupérer les données à partir du corps de la requête
  const sql = "INSERT INTO starters (starter, price) VALUES (?, ?)";
  db.query(sql, ["Caca", 500], (err, result) => {
    if (err) {
      console.error("Erreur lors de l'ajout de l'entrée :", err);
      res.status(500).json({ error: "Erreur lors de l'entrée" });
      return;
    }
    console.log("Entrée ajouté avec succès !");
    res.json({ message: "Entrée ajouté avec succès !" });
  });
});

///   Route GET pour récupérer une entrée par son ID dans la base de données   ///
router.get("/starters/:id", (req, res) => {
  const startersId = req.params.id; // Récupérer l'ID de l'entrée à partir des paramètres de la requête
  const sql = "SELECT * FROM starters WHERE id = ?";
  db.query(sql, [startersId], (err, result) => {
    // Passer l'ID de l'entrée comme paramètre dans la requête SQL
    if (err) {
      console.error("Erreur lors de la récupération de l'entrée :", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération de l'entrée" });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ error: "Entrée non trouvé" });
      return;
    }
    const entrée = result[0]; // Récupérer le premier résultat du résultat de la requête
    console.log("Entrée récupéreé avec succès :", entrée);
    res.json({ entrée });
  });
});

///   Route GET pour récupérer TOUTE les entrées dans la base de données   ///
router.get("/starters", (req, res) => {
  const sql = "SELECT * FROM starters";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Erreur lors de la récupération des entrées :", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération des entrées" });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ error: "Entrées non trouvé" });
      return;
    }
    const entrée = result;
    console.log("Entrées récupérés avec succès");
    res.json({ entrée });
  });
});

///   Route DELETE pour supprimer une entré par son ID dans la base de données   ///
router.delete("/starters/:id", (req, res) => {
  const starterId = req.params.id; // Récupérer l'ID de l'entrée à partir des paramètres de la requête
  const sql = "DELETE FROM starters WHERE id = ?";
  db.query(sql, [starterId], (err, result) => {
    // Passer l'ID de l'entrée comme paramètre dans la requête SQL
    if (err) {
      console.error("Erreur lors de la suppression de l'entrée :", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la suppression de l'entrée" });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Entrée non trouvé" });
      return;
    }
    console.log("Entrée supprimé avec succès. ID :", starterId);
    res.json({ success: "Entrée supprimé avec succès" });
  });
});

///  Route UPDTATE pour modifier une entrée avec son ID dans la base de donnée   ///
router.put("/starters/:id", (req, res) => {
    const { id } = req.params; // Récupérer l'ID du starter à modifier depuis les paramètres de la requête
    const { starter, price } = req.body; // Récupérer les données mises à jour depuis le corps de la requête
  
    // Construire la requête SQL pour mettre à jour le starter
    const sql = "UPDATE starters SET starter = ?, price = ? WHERE id = ?";
    db.query(sql, [starter, price, id], (err, result) => {
      if (err) {
        console.error("Erreur lors de la modification de l'entrée :", err);
        res.status(500).json({ error: "Erreur lors de la modification de l'entrée" });
        return;
      }
      console.log("Entrée modifié avec succès !");
      res.json({ message: "Entrée modifié avec succès !" });
    });
  });
  


module.exports = router;
