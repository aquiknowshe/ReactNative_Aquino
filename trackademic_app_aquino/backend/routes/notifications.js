const express = require("express");
const router = express.Router();

const db = require("../db");

router.get("/:studentId", (req, res) => {

    const studentId = req.params.studentId;

    const sql = `
        SELECT *
        FROM notifications
        WHERE student_id = ?
        ORDER BY notification_date DESC
    `;

    db.query(sql, [studentId], (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);

    });

});

module.exports = router;