const Venue = require('../models/venue')

module.exports = {
    create,
    delete: deleteReview,
    update,
    edit
    

    

    
};
function update(req,res){
    Venue.findOne({'reviews._id': req.params.id}).then(function(venue){
        let review = venue.reviews.id(req.params.id);


        Object.assign(review, req.body);
        venue.save(function(err){
            res.redirect(`/venues`);
        })
    })
}
function edit(req,res){
    Venue.findOne({'reviews._id': req.params.id}).then(function(venue){
        let review = venue.reviews.id(req.params.id);

        res.render('reviews/reviewEdit', {title: "edit review", review});
});
};



function deleteReview(req, res, next){
    Venue.findOne({'reviews._id': req.params.id}).then(function(venue){
        const review = venue.reviews.id(req.params.id);
        console.log(review);
        if (!review.user.equals(req.user._id)) return res.redirect(`/venues/${venues._id}`);
        review.remove();
        venue.save().then(function() {
            res.redirect(`/venues/${venue._id}`);
          }).catch(function(err) {
              return next(err)
            });
        });
  
}


function create(req, res){
    Venue.findById(req.params.id, function(err, venue){
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        
        

        venue.reviews.push(req.body);
        
        
        venue.save(function(err){
            res.redirect(`/venues/${venue._id}`) ;
            
        });
    });
  
}
