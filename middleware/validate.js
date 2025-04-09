const validator = require("../helpers/validate");

const validateBook = (req, res, next) => {
  const validationRule = {
    title: "required|string",
    author: "required|string",
    isbn: "required|string",
    publishedDate: "required|string|date",
    genre: "required|string",
    pages: "required|integer",
    language: "required|string",
  };

  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      return res.status(412).send({
        success: false,
        message: "Validation failed",
        data: err,
      });
    }
    next();
  });
};

module.exports = {
  validateBook,
};
