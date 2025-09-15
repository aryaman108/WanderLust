const ExpressError = require("./utils/ExpressError.js");
const Listing = require("./models/listing.js");
const Review = require("./models/review.js");

module.exports.isLoggedIn = (req,res,next)=>{
    console.log(req);
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","must be loged in!");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    } else {
        res.locals.redirectUrl = "/listings";
    }
    next();
};

const { reviewSchema, listingSchema } = require("./schemas.js");

module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body.listing);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        const ExpressError = require("./utils/ExpressError.js");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

module.exports.isOwner = async (req,res,next)=>{
    let { id } = req.params;
    let listing = await Listing.findById(id).populate("owner");
    if(!req.user || !listing.owner._id.equals(req.user._id)){
        req.flash("error","dont have permission");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.isReviewAuthor = async (req,res,next)=>{
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if(!req.user || !review.author._id.equals(req.user._id)){
        req.flash("error","dont have permission");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

    
