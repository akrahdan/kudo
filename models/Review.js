const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
  content: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  rating: Number
});

mongoose.model('reviews', reviewSchema);
