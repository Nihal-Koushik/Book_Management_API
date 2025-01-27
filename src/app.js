require('dontenv').config();
const express = require("express");
const bookRoutes = require("./routes/bookRoutes");
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 3000;
// Middleware
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);

// MongoDB Connection
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error("Failed to start server:", error);
        process.exit(1);
    });
