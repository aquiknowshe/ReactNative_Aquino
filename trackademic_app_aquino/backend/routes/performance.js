const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/:studentId", (req, res) => {

    const studentId = req.params.studentId;

    const sql = `
        SELECT
            classes.course_title,
            activities.title,
            activities.category,
            activities.activity_date,
            activities.total_items,
            scores.score,
            scores.average,
            scores.remarks

        FROM scores

        INNER JOIN activities
            ON scores.activity_id = activities.id

        INNER JOIN classes
            ON activities.class_id = classes.id

        WHERE scores.student_id = ?

        ORDER BY activities.activity_date DESC
    `;

    db.query(sql, [studentId], (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);

    });

});

module.exports = router;