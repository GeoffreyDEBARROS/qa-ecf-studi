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
  const date = req.body.date;
  const hour = req.body.hour;
  const email = req.body.email;
  const guests = req.body.default_guests;

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

///   Route pour récupérer les réservations   ///
router.get("/reservations", (req, res) => {
  const query = "SELECT * FROM reservation";
  db.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({
        message:
          "Une erreur s'est produite lors de la récupération des réservations",
      });
      return;
    }

    res.status(200).json(results);
  });
});
///

///   Route pour supprimer une réservation   ///
router.delete("/reservations/:id", (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM reservation WHERE id = ?";
  db.query(query, [id], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({
        message:
          "Une erreur s'est produite lors de la suppression de la réservation",
      });
      return;
    }

    if (results.affectedRows === 0) {
      res.status(404).json({
        message: "La réservation avec l'ID fourni n'a pas été trouvée",
      });
      return;
    }

    res.status(200).json({ message: "La réservation a été supprimée avec succès" });
  });
});





module.exports = router;
