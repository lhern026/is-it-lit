const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String 
  }, {
    timestamps: true
  });


const venueSchema = new Schema({
    location: String,
    price: Number,
    capacity: Number,
    about: String

});

module.exports = mongoose.model('Venue', venueSchema);