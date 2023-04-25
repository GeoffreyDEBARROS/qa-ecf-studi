const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "ROOT",
  database: "quai_antique_db",
});

///   Route POST pour ajouter un dessert dans la base de données   ///
router.post("/desserts", (req, res) => {
  const { dessert, price } = req.body; // Récupérer les données à partir du corps de la requête
  const sql = "INSERT INTO desserts (dessert, price) VALUES (?, ?)";
  db.query(sql, ["Caca", 500], (err, result) => {
    if (err) {
      console.error("Erreur lors de l'ajout du dessert :", err);
      res.status(500).json({ error: "Erreur lors du dessert" });
      return;
    }
    console.log("Dessert ajouté avec succès !");
    res.json({ message: "Dessert ajouté avec succès !" });
  });
});

///   Route GET pour récupérer un dessert par son ID dans la base de données   ///
router.get("/desserts/:id", (req, res) => {
  const dessertsId = req.params.id; // Récupérer l'ID du dessert à partir des paramètres de la requête
  const sql = "SELECT * FROM desserts WHERE id = ?";
  db.query(sql, [dessertsId], (err, result) => {
    // Passer l'ID du dessert comme paramètre dans la requête SQL
    if (err) {
      console.error("Erreur lors de la récupération du dessert :", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération du dessert" });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ error: "Dessert non trouvé" });
      return;
    }
    const dessert = result[0]; // Récupérer le premier résultat du résultat de la requête
    console.log("Dessert récupéreé avec succès :", dessert);
    res.json({ dessert });
  });
});

///   Route GET pour récupérer TOUS les dessers dans la base de données   ///
router.get("/desserts", (req, res) => {
  const sql = "SELECT * FROM desserts";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Erreur lors de la récupération du dessert :", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération du dessert" });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ error: "Dessert non trouvé" });
      return;
    }
    const dessert = result;
    console.log("Dessert récupérés avec succès");
    res.json({ dessert });
  });
});

///   Route DELETE pour supprimer un dessert par son ID dans la base de données   ///
router.delete("/desserts/:id", (req, res) => {
  const dessertId = req.params.id; // Récupérer l'ID du dessert à partir des paramètres de la requête
  const sql = "DELETE FROM desserts WHERE id = ?";
  db.query(sql, [dessertId], (err, result) => {
    // Passer l'ID du dessert comme paramètre dans la requête SQL
    if (err) {
      console.error("Erreur lors de la suppression du dessert :", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la suppression du dessert" });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Dessert non trouvé" });
      return;
    }
    console.log("Dessert supprimé avec succès. ID :", dessertId);
    res.json({ success: "Dessert supprimé avec succès" });
  });
});

///  Route UPDTATE pour modifier un dessert avec son ID dans la base de donnée   ///
router.put("/desserts/:id", (req, res) => {
  const { id } = req.params; // Récupérer l'ID du dessert à modifier depuis les paramètres de la requête
  const { dessert, price } = req.body; // Récupérer les données mises à jour depuis le corps de la requête

  // Construire la requête SQL pour mettre à jour le dessert
  const sql = "UPDATE desserts SET dessert = ?, price = ? WHERE id = ?";
  db.query(sql, [dessert, price, id], (err, result) => {
    if (err) {
      console.error("Erreur lors de la modification du dessert :", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la modification du dessert" });
      return;
    }
    console.log("Dessert modifié avec succès !");
    res.json({ message: "Dessert modifié avec succès !" });
  });
});

module.exports = router;
