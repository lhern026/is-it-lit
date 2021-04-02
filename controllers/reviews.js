const Venue = require('../models/venue')

module.exports = {
    create,
    

    
};
function create(req, res){
    Venue.findById(req.params.id, function(err, venue){
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        
        

        venue.reviews.push(req.body);
        console.log(req.body);
        
        venue.save(function(err){
            res.redirect(`/venues/${venue._id}`) ;
            
        });
    });
  
}
