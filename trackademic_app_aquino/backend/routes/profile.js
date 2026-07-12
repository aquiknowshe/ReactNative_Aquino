const express = require("express");
const router = express.Router();

const db = require("../db");

router.get("/:studentId", (req, res) => {

    const studentId = req.params.studentId;

    const sql = `
        SELECT *
        FROM students
        WHERE id = ?
    `;

    db.query(sql, [studentId], (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        if(results.length === 0){
            return res.status(404).json({
                message:"Student not found."
            });
        }

        res.json(results[0]);

    });

});

module.exports = router;