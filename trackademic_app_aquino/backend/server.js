require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// Connect to database
require("./db");

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/home", require("./routes/home"));
app.use("/api/classes", require("./routes/classes"));
app.use("/api/performance", require("./routes/performance"));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/notifications", require("./routes/notifications"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});