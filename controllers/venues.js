const Venue = require('../models/venue')

module.exports = {
    index,
    show,
    new: newVenue,
    create,
    

    
};

function show(req, res){
    Venue.find({}, function(err, venues) {
        res.render('venues/show', {venues} );
    });
}

function index(req, res){
    Venue.find({}, function(err, venues) {
        res.render('venues/index', {venues} );
    });
}

function newVenue(req, res){
    res.render('venues/new')
}

function create(req, res){
    const venue = new Venue(req.body);
    venue.save(function(err){
        if (err) return res.render('venue/new');
        console.log(venue);
        
        res.redirect('/venues/');
    });
}

