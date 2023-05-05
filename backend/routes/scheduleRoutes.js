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
router.put("/schedule/:days", (req, res) => {
  const days = req.params.days;
  const { morning_open, morning_close, evening_open, evening_close } = req.body;
  // Requête SQL pour mettre à jour les horaires du restaurant dans la table
  const sql = `
      UPDATE schedule
      SET morning_open = ?, morning_close = ?, evening_open = ?, evening_close = ?
      WHERE days = ?
    `;

  // Exécution de la requête SQL avec les valeurs fournies
  db.query(
    sql,
    [morning_open, morning_close, evening_open, evening_close, days],
    (err, result) => {
      if (err) {
        console.error("Erreur lors de la mise à jour des horaires :", err);
        res
          .status(500)
          .json({ message: "Erreur lors de la mise à jour des horaires" });
        return;
      }
      console.log(`Horaires de ${days} mis à jour`);
      res.json({ message: "Horaires du restaurant mis à jour" });
    }
  );
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
