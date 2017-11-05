const mongoose = require('mongoose');

const { Schema }  = mongoose;

const userSchema = Schema({
  fullname: String,
  email: String,
  uid: String,
  avatar: String,
  access_token: String

});

mongoose.model('users', userSchema);
