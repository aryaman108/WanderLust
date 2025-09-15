const express=require("express");
const router=express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingsController = require("../controller/listings.js");
const listing = require("../models/listing.js");

router
    .route("/")
    .get(wrapAsync(listingsController.index))
    .post(
        isLoggedIn,
        validateListing,
        wrapAsync(listingsController.createListing)
    );

// List all listings
router.get("/new", isLoggedIn, listingsController.renderNewForm);

router.route("/:id")
    .get(wrapAsync(listingsController.showListing))
    .put( 
        isLoggedIn, 
        isOwner, 
        wrapAsync(listingsController.updateListing))
    .delete( 
        isLoggedIn,
        isOwner, wrapAsync(listingsController.deleteListing)
    );

router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingsController.renderEditForm));

module.exports=router;