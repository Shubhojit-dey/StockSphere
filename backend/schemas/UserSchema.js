const { Schema } = require("mongoose");

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

module.exports = { UserSchema };
