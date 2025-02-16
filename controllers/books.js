const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

// Retrieve all books from the database
const getAllBooks = async (req, res, next) => {
  try {
    const result = await mongodb.getDb().db().collection("books").find();
    const books = await result.toArray();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(books);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving books." });
  }
};

// Retrieve a single book by ID
const getBook = async (req, res, next) => {
  try {
    const bookId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection("books")
      .find({ _id: bookId });
    const book = await result.toArray();
    if (!book[0]) {
      res.status(404).json({ error: "Book not found" });
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(book[0]);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the book." });
  }
};

// Create a new book
const createBook = async (req, res) => {
  try {
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      isbn: req.body.isbn,
      publishedDate: req.body.publishedDate,
      genre: req.body.genre,
      pages: req.body.pages,
      language: req.body.language,
    };
    const response = await mongodb
      .getDb()
      .db()
      .collection("books")
      .insertOne(newBook);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json({ error: "An error occurred while creating the book." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the book." });
  }
};

// Update an existing book
const updateBook = async (req, res) => {
  try {
    const bookId = new ObjectId(req.params.id);
    const updatedBook = {
      title: req.body.title,
      author: req.body.author,
      isbn: req.body.isbn,
      publishedDate: req.body.publishedDate,
      genre: req.body.genre,
      pages: req.body.pages,
      language: req.body.language,
    };
    const response = await mongodb
      .getDb()
      .db()
      .collection("books")
      .replaceOne({ _id: bookId }, updatedBook);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json({ error: "An error occurred while updating the book." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the book." });
  }
};

// Delete an existing book
const deleteBook = async (req, res) => {
  try {
    const bookId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db()
      .collection("books")
      .deleteOne({ _id: bookId });
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json({ error: "An error occurred while deleting the book." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the book." });
  }
};

module.exports = {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
