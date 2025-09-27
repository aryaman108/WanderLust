const express=require("express");
const router=express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingsController = require("../controller/listings.js");
const listing = require("../models/listing.js");
const { storage } = require("../cloudConfig.js");
const multer  = require('multer');
const upload = multer({ storage: storage });


router
    .route("/")
    .get(wrapAsync(listingsController.index))
    .post(
        isLoggedIn,
        upload.single('listing[image][url]'),
        wrapAsync(listingsController.createListing)
    );

// List all listings
router.get("/new", isLoggedIn, listingsController.renderNewForm);

router.route("/:id")
    .get(wrapAsync(listingsController.showListing))
    .put(
        isLoggedIn,
        isOwner,
        upload.single('listing[image][url]'),
        wrapAsync(listingsController.updateListing))
    .delete( 
        isLoggedIn,
        isOwner, wrapAsync(listingsController.deleteListing)
    );

router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingsController.renderEditForm));

module.exports=router;