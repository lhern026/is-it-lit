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
    stadiumName: String,
    location: String,
    hostTeam: String,
    capacity: Number,
    

});

module.exports = mongoose.model('Venue', venueSchema);