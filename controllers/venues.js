const Venue = require('../models/venue')

module.exports = {
    index,
    new: newVenue,
    create,
    show,
    // update
    delete: deleteVenue

    
    

    

    
};

//iif a venue has been already entered dont allow
//create a review tying it to user and venue 

function deleteVenue(req, res){
    req.params.id = req.params.user;
    Venue.findById(req.params.id).then(function(venue){
        if (!venue.user.equals(req.user._id)) return res.redirect('venues/show');
        venue.findByIdandDelete(req.params.id, function(err){
            res.redirect('venues');

        })
    })

}

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

// function update(req, res){
//     console.log(Venue);
// }
