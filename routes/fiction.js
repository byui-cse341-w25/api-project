const express = require("express");
const router = express.Router();
const fictionController = require("../controllers/fiction");

router.get("/", fictionController.getAllFictionBooks);
router.get("/:id", fictionController.getFictionBook);
router.post("/", fictionController.createFictionBook);
router.put("/:id", fictionController.updateFictionBook);
router.delete("/:id", fictionController.deleteFictionBook);

/**
 * @swagger
 * /fiction:
 *   get:
 *     summary: Get a list of fiction books
 *     description: Retrieve a list of fiction books from the database.
 *     responses:
 *       200:
 *         description: Successfully retrieved a list of fiction books.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /fiction/{id}:
 *   get:
 *     summary: Get a fiction book by ID
 *     description: Retrieve a single fiction book from the database using its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the fiction book.
 *     responses:
 *       200:
 *         description: Successfully retrieved the fiction book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Book not found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /fiction:
 *   post:
 *     summary: Create a new fiction book
 *     description: Insert a new fiction book into the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: Successfully created a fiction book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /fiction/{id}:
 *   put:
 *     summary: Update an existing fiction book
 *     description: Update a fiction book's details in the database using the provided request body.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the fiction book.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Successfully updated the fiction book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       400:
 *         description: Bad request.
 *       404:
 *         description: Book not found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /fiction/{id}:
 *   delete:
 *     summary: Delete an existing fiction book
 *     description: Remove a fiction book from the database using the provided book ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the fiction book.
 *     responses:
 *       200:
 *         description: Successfully deleted the fiction book.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Book successfully deleted."
 *       404:
 *         description: Book not found.
 *       500:
 *         description: Internal server error.
 */

module.exports = router;
