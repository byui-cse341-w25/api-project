const validator = require("../helpers/validate");

const saveContact = (req, res, next) => {
  const validationRule = {
    title: "required|string",
    author: "required|string",
    isbn: "required|string",
    publishedDate: "required|string",
    genre: "required|string",
    pages: "integer|string",
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
  saveContact,
};
