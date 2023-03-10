const Joi = require("joi");
const mongoose = require("mongoose");


const genreSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlenght: 50,
    },
  });
  
  const Genre = mongoose.model("Genre", genreSchema);

  function validateGenre(genre) {
    const schema = {
      name: Joi.string().min(3).required(),
    };
  
    return Joi.validate(genre, schema);
  }

  module.exports.Genre = Genre
  module.exports.validate = validateGenre
  module.exports.genreSchema = genreSchema