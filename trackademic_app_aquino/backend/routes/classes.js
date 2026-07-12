const express = require("express");
const router = express.Router();

const db = require("../db");

router.get("/:studentId", (req, res) => {
    const studentId = req.params.studentId;

    const sql = `
        SELECT
            classes.*
        FROM enrollments
        INNER JOIN classes
            ON enrollments.class_id = classes.id
        WHERE enrollments.student_id = ?
        ORDER BY classes.course_title ASC
    `;

    db.query(sql, [studentId], (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);

    });

});

module.exports = router;