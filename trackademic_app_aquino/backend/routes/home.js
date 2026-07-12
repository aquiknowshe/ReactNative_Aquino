const express = require("express");
const router = express.Router();

const db = require("../db");

router.get("/", (req, res) => {
    const sql = `
        SELECT *
        FROM announcements
        ORDER BY created_at DESC
    `;

    db.query(sql, (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);

    });
});

module.exports = router;