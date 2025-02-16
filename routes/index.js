// routes/index.js
// const express = require("express");
// const router = express.Router();
// const { fNameFunction } = require("../controllers");

// router.get("/books", fNameFunction);
// router.use("/books", require("./books"));

// module.exports = router;

// routes/index.js
const express = require("express");
const router = express.Router();
const { fNameFunction } = require("./books"); // Changed to import from books.js

router.get("/books", fNameFunction);
router.use("/books", require("./books"));

module.exports = router;
