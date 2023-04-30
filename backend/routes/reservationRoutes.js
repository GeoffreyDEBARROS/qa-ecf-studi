const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "ROOT",
  database: "quai_antique_db",
});

router.post("/reservations", (req, res) => {
  const date = "2023-05-01";
  const hour = "12:30:00";
  const email = "geo@gmail.com";
  const guests = 4;

  // Vérifier que les données ont été fournies
  if (!date || !hour || !email || !guests) {
    res.status(400).json({ message: "Tous les champs doivent être remplis" });
    return;
  }

  // Vérifier que l'heure de réservation est disponible
  const query =
    "SELECT COUNT(*) AS count FROM reservation WHERE date = ? AND hour = ?";
  db.query(query, [date, hour], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({
        message:
          "Une erreur s'est produite lors de la vérification de l'heure de réservation",
      });
      return;
    }

    const count = results[0].count;
    if (count > 0) {
      res
        .status(400)
        .json({ message: "L'heure de réservation n'est pas disponible" });
      return;
    }

    // Insérer la nouvelle réservation dans la base de données
    const insertQuery =
      "INSERT INTO reservation (date, hour, email, default_guests) VALUES (?, ?, ?, ?)";
    db.query(insertQuery, [date, hour, email, guests], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({
          message:
            "Une erreur s'est produite lors de l'enregistrement de la réservation",
        });
        return;
      }

      res
        .status(201)
        .json({ message: "La réservation a été enregistrée avec succès" });
    });
  });
});

module.exports = router;
