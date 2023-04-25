const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "ROOT",
  database: "quai_antique_db",
});

///   Route POST pour ajouter un plat dans la base de données   ///
router.post("/dishes", (req, res) => {
  const { dishe, price } = req.body; // Récupérer les données à partir du corps de la requête
  const sql = "INSERT INTO dishes (dishe, price) VALUES (?, ?)";
  db.query(sql, [dishe, price], (err, result) => {
    if (err) {
      console.error("Erreur lors de l'ajout du plat :", err);
      res.status(500).json({ error: "Erreur lors du plat" });
      return;
    }
    console.log("Plat ajouté avec succès !");
    res.json({ message: "Plat ajouté avec succès !" });
  });
});

///   Route GET pour récupérer un plat par son ID dans la base de données   ///
router.get("/dishes/:id", (req, res) => {
  const dishesId = req.params.id; // Récupérer l'ID du plat à partir des paramètres de la requête
  const sql = "SELECT * FROM dishes WHERE id = ?";
  db.query(sql, [dishesId], (err, result) => {
    // Passer l'ID de l'entrée comme paramètre dans la requête SQL
    if (err) {
      console.error("Erreur lors de la récupération du plat :", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération du plat" });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ error: "Plat non trouvé" });
      return;
    }
    const plat = result[0]; // Récupérer le premier résultat du résultat de la requête
    console.log("Plat récupéreé avec succès :", plat);
    res.json({ plat });
  });
});

///   Route GET pour récupérer TOUS les plats dans la base de données   ///
router.get("/dishes", (req, res) => {
  const sql = "SELECT * FROM dishes";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Erreur lors de la récupération des plats :", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération des plats" });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ error: "Plats non trouvé" });
      return;
    }
    const plat = result;
    console.log("Plats récupérés avec succès");
    res.json({ plat });
  });
});

///   Route DELETE pour supprimer un plat par son ID dans la base de données   ///
router.delete("/dishes/:id", (req, res) => {
  const dishesId = req.params.id; // Récupérer l'ID du plat à partir des paramètres de la requête
  const sql = "DELETE FROM dishes WHERE id = ?";
  db.query(sql, [dishesId], (err, result) => {
    // Passer l'ID du plat comme paramètre dans la requête SQL
    if (err) {
      console.error("Erreur lors de la suppression du plat :", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la suppression du plat" });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Plat non trouvé" });
      return;
    }
    console.log("Plat supprimé avec succès. ID :", dishesId);
    res.json({ success: "Plat supprimé avec succès" });
  });
});

///  Route UPDTATE pour modifier un plat avec son ID dans la base de donnée   ///
router.put("/dishes/:id", (req, res) => {
    const { id } = req.params; // Récupérer l'ID du plat à modifier depuis les paramètres de la requête
    const { dishe, price } = req.body; // Récupérer les données mises à jour depuis le corps de la requête
  
    // Construire la requête SQL pour mettre à jour le plat
    const sql = "UPDATE dishes SET dishe = ?, price = ? WHERE id = ?";
    db.query(sql, [dishe, price, id], (err, result) => {
      if (err) {
        console.error("Erreur lors de la modification du plat :", err);
        res.status(500).json({ error: "Erreur lors de la modification du plat" });
        return;
      }
      console.log("Plat modifié avec succès !");
      res.json({ message: "Plat modifié avec succès !" });
    });
  });
  


module.exports = router;
