const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books");
const { validateBook } = require("../middleware/validate");

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - isbn
 *         - publishedDate
 *         - genre
 *         - pages
 *         - language
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the book
 *         author:
 *           type: string
 *           description: The author of the book
 *         isbn:
 *           type: string
 *           description: The ISBN of the book
 *         publishedDate:
 *           type: string
 *           format: date
 *           description: The publication date of the book (YYYY-MM-DD)
 *         genre:
 *           type: string
 *           description: The genre of the book
 *         pages:
 *           type: integer
 *           description: The number of pages in the book
 *         language:
 *           type: string
 *           description: The language the book is written in
 */

router.get("/", booksController.getAllBooks);
// Changed getSingle to getBook
router.get("/:id", booksController.getBook);

router.post("/", validateBook, booksController.createBook);
router.put("/:id", validateBook, booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

// Keep all your Swagger documentation as is

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get a list of books
 *     description: Retrieve a list of books from the database.
 *     responses:
 *       200:
 *         description: Successfully retrieved a list of books.
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
router.get("/", booksController.getAllBooks);

/**
 * @swagger
 * /books/{book_id}:
 *   get:
 *     summary: Get a book by ID
 *     description: Retrieve a single book from the database using the book's unique ID.
 *     parameters:
 *       - in: path
 *         name: book_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the book.
 *     responses:
 *       200:
 *         description: Successfully retrieved the book.
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
 * /books:
 *   post:
 *     summary: Create a new book
 *     description: Insert a new book into the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: Successfully created a book.
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
 * /books/{book_id}:
 *   put:
 *     summary: Update an existing book
 *     description: Update a book's details in the database using the provided request body.
 *     parameters:
 *       - in: path
 *         name: book_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the book.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Successfully updated the book.
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
 * /books/{book_id}:
 *   delete:
 *     summary: Delete an existing book
 *     description: Remove a book from the database using the provided book ID.
 *     parameters:
 *       - in: path
 *         name: book_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the book.
 *     responses:
 *       200:
 *         description: Successfully deleted the book.
 *       404:
 *         description: Book not found.
 *       500:
 *         description: Internal server error.
 */

module.exports = router;
