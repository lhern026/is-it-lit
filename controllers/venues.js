const Venue = require('../models/venue')

module.exports = {
    index,
    new: newVenue,
    create,
    show,
       
};

//iif a venue has been already entered dont allow
//create a review tying it to user and venue 


function show(req, res){
    Venue.findById(req.params.id)
  .populate('venue').exec(function(err, venue) 
     {
         
        res.render('venues/show', {venue} );
    });

}



function index(req, res){
    Venue.find({}, function(err, venues) {
        res.render('venues/index', {venues} );
    });
}

function newVenue(req, res){
    res.render('venues/new');
}

function create(req, res){
    const venue = new Venue(req.body);
    venue.save(function(err){
        if (err) return res.render('venue/new', {venues});
        
        
        res.redirect(`/venues/${venue._id}`);
    });
}

