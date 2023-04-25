const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "ROOT",
  database: "quai_antique_db",
});

// Route pour mettre à jour les horaires d'ouverture et de fermeture du restaurant
router.put("/schedule/:day", (req, res) => {
  const id = req.params.day;
  const { morning_open, morning_close, evening_open, evening_close } = req.body;

  // Requête SQL pour mettre à jour les horaires du restaurant dans la table
  const sql = `
      UPDATE schedule
      SET morning_open = ?, morning_close = ?, evening_open = ?, evening_close = ?
      WHERE id = ?
    `;

  // Exécution de la requête SQL avec les valeurs fournies
  connection.query(
    sql,
    [morning_open, morning_close, evening_open, evening_close, id],
    (err, result) => {
      if (err) {
        console.error("Erreur lors de la mise à jour des horaires :", err);
        res
          .status(500)
          .json({ message: "Erreur lors de la mise à jour des horaires" });
        return;
      }
      console.log(`Horaires du restaurant avec ID ${id} mis à jour`);
      res.json({ message: "Horaires du restaurant mis à jour" });
    }
  );
});

///   Route GET pour récupérer un plat par son ID dans la base de données   ///
router.get("/dishes/:id", (req, res) => {
  const dishesId = req.params.id; // Récupérer l'ID du plat à partir des paramètres de la requête
  const sql = "SELECT * FROM dishes WHERE id = ?";
  db.query(sql, [dishesId], (err, result) => {
    // Passer l'ID de l'entrée comme paramètre dans la requête SQL
    if (err) {
      console.error("Erreur lors de la récupération du plat :", err);
      res.status(500).json({ error: "Erreur lors de la récupération du plat" });
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

///   Route pour récupérer les horaires d'ouverture et de fermeture du restaurant pour un jour de la semaine donné   //
router.get("/schedule/:days", (req, res) => {
  const day = req.params.days;

  // Requête SQL pour récupérer les horaires du restaurant pour le jour de la semaine donné
  const sql = `
      SELECT morning_open, morning_close, evening_open, evening_close
      FROM schedule
      WHERE days = ?
    `;

  // Exécution de la requête SQL avec le jour de la semaine fourni
  db.query(sql, [day], (err, result) => {
    if (err) {
      console.error("Erreur lors de la récupération des horaires :", err);
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération des horaires" });
      return;
    }

    if (result.length === 0) {
      res.status(404).json({
        message: "Aucun horaire trouvé pour le jour de la semaine spécifié",
      });
      return;
    }

    const horaires = result[0];
    res.json({ horaires });
  });
});

///   Route qui permet de récupérer tous les jours de la semaine   ///
router.get("/schedule", (req, res) => {
  // Requête SQL pour récupérer les horaires du restaurant pour tous les jours de la semaine
  const sql = `
      SELECT days, morning_open, morning_close, evening_open, evening_close
      FROM schedule
    `;

  // Exécution de la requête SQL
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Erreur lors de la récupération des horaires :", err);
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération des horaires" });
      return;
    }

    if (result.length === 0) {
      res.status(404).json({
        message: "Aucun horaire trouvé pour le jour de la semaine spécifié",
      });
      return;
    }

    const horaires = result;
    res.json({ horaires });
  });
});

module.exports = router;
