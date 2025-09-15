const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const ExpressError = require("../utils/ExpressError.js");


module.exports.createReview = async (req, res) => {
    console.log("Request params:", req.params);
    console.log("Request body:", req.body);
    
    let listing = await Listing.findById(req.params.id);
    if (!listing) {
        throw new ExpressError(404, "Listing not found");
    }
    
    if (!req.body.review) {
        throw new ExpressError(400, "Review data is missing");
    }
    
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    newReview.author = req.user._id; // Set the author to the logged-in user
    console.log(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success","Created new review!");
    res.redirect(`/listings/${listing._id}`);
};

module.exports.deleteReview = async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Successfully deleted a review!");
    res.redirect(`/listings/${id}`);
};