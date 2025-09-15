const express=require("express");
const router=express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schemas.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, validateReview, isReviewAuthor } = 
require("../middleware.js");

const reviewsController = require("../controller/review.js");

//Reviews
router.post("/",
    isLoggedIn,
    validateReview, 
    wrapAsync(reviewsController.createReview));

//DELETE Review Route
router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor, 
    wrapAsync(reviewsController.deleteReview));

module.exports=router;
