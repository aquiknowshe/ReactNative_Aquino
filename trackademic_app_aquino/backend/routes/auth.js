const express = require("express");
const router = express.Router();

const db = require("../db");

// POST /api/auth/login
router.post("/login", (req, res) => {
    const { student_number, password } = req.body;

    if (!student_number || !password) {
        return res.status(400).json({
            success: false,
            message: "Student number and password are required."
        });
    }

    const sql = `
        SELECT *
        FROM students
        WHERE student_number = ?
        AND password = ?
    `;

    db.query(sql, [student_number, password], (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (results.length === 0) {
            return res.status(401).json({
                success: false,
                message: "Invalid student number or password."
            });
        }

        const student = results[0];

        res.json({
            success: true,
            message: "Login successful",
            student: {
                id: student.id,
                student_number: student.student_number,
                firstname: student.firstname,
                lastname: student.lastname,
                course: student.course,
                section: student.section,
                school_year: student.school_year,
                semester: student.semester,
                profile_picture: student.profile_picture
            }
        });

    });

});

module.exports = router;