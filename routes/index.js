
// routes/index.js
const express = require("express");
const router = express.Router();
const fNameFunction = require("./books");
const bNameFunction = require("./fiction"); // Changed to import from books.js

// router.get("/books", fNameFunction);
router.use("/fiction", require("./fiction")); // Changed to use /fiction
// router.get("/fiction", bNameFunction);
router.use("/books", require("./books"));

module.exports = router;
