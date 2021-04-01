const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
    experience: String,
    averagePrice: Number,
    rating: {type: Number, min: 1, max: 10, default: 5},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    username: String,
    userAvatar: String
    
  }, {
    timestamps: true
  });


const venueSchema = new Schema({
    stadiumName: String,
    location: String,
    hostTeam: String,
    capacity: Number,
    
    reviews: [reviewSchema]
    

},{
    timestamps: true
});


module.exports = mongoose.model('Venue', venueSchema);


// make sure all data is being sent specific to the venue
//create review isworking 
//diplay review
//edit reviews
//delete reviews