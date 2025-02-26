const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

// Retrieve all books from the database
const getAllFictionBooks = async (req, res) => {
  try {
    const result = await mongodb
      .getDb()
      .db("books")
      .collection("fiction")
      .find()
      .toArray();

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
  } catch (error) {
    console.error("Error retrieving fiction books:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving fiction books." });
  }
};

// Retrieve a single book by ID
const getFictionBook = async (req, res) => {
  try {
    const fictionId = new ObjectId(req.params.id);
    const fiction = await mongodb
      .getDb()
      .db("books")
      .collection("fiction")
      .findOne({ _id: fictionId });

    if (!fiction) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(fiction);
  } catch (error) {
    console.error("Error retrieving fiction book:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the fiction book." });
  }
};

// Create a new book
const createFictionBook = async (req, res) => {
  try {
    const newFictionBook = {
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
      .db("books")
      .collection("fiction")
      .insertOne(newFictionBook);

    if (response.acknowledged) {
      res.status(201).json({
        message: "Book successfully created.",
        bookId: response.insertedId,
      });
    } else {
      res
        .status(500)
        .json({ error: "An error occurred while creating the book." });
    }
  } catch (error) {
    console.error("Error creating book:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the book." });
  }
};

// Update an existing book
const updateFictionBook = async (req, res) => {
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
      .db("books")
      .collection("fiction")
      .replaceOne({ _id: bookId }, updatedBook);

    if (response.modifiedCount > 0) {
      res.status(200).json({ message: "Book updated successfully." });
    } else {
      res.status(404).json({ error: "Book not found or no changes detected." });
    }
  } catch (error) {
    console.error("Error updating book:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the book." });
  }
};

// Delete an existing book
const deleteFictionBook = async (req, res) => {
  try {
    const bookId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db("books")
      .collection("fiction")
      .deleteOne({ _id: bookId });

    if (response.deletedCount > 0) {
      res.status(200).json({ message: "Book successfully deleted." });
    } else {
      res.status(404).json({ error: "Book not found." });
    }
  } catch (error) {
    console.error("Error deleting book:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the book." });
  }
};

module.exports = {
  getAllFictionBooks,
  getFictionBook,
  createFictionBook,
  updateFictionBook,
  deleteFictionBook,
};
