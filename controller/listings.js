const Listing = require("../models/listing.js");
const { listingSchema } = require("../schemas.js");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({}).populate("owner");
    res.render("listings/index.ejs", { allListings });
}

module.exports.renderNewForm = (req, res) => {
    console.log(req.user);
    res.render("listings/new.ejs");
}

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
    .populate({path: "reviews", populate: { path: "author" }})
    .populate("owner");
    if(!listing){
        req.flash("error","Cannot find that listing!");
        res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing });
}

module.exports.createListing = async (req, res) => {
    // Handle the image data structure properly
    let result = listingSchema.validate(req.body.listing);
    console.log(result);
    const { image, ...rest } = req.body.listing;
    let listingData = { ...rest };

    // If image URL is provided, structure it correctly
    if (image && (image.url || image.filename)) {
        listingData.image = {
            url: image.url || "",
            filename: image.filename || "listingimage"
        };
    }

    // Set owner to the logged-in user
    listingData.owner = req.user._id;

    const newListing = new Listing(listingData);
    await newListing.save();
    req.flash("success","Successfully made a new listing!");
    res.redirect("/listings");
}

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Cannot find that listing!");
        res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
}

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    // Handle the image data structure properly
    const { image, ...rest } = req.body.listing;
    let updateData = { ...rest };

    // If image URL is provided, structure it correctly
    if (image && (image.url || image.filename)) {
        updateData.image = {
            url: image.url || "",
            filename: image.filename || "listingimage"
        };
    }

    await Listing.findByIdAndUpdate(id, updateData);
    req.flash("success","Successfully updated a listing!");
    res.redirect(`/listings/${id}`);
}

module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if(req.user && !listing.owner._id.equals(req.user._id)){
        req.flash("error","dont have permission");
        return res.redirect(`/listings/${id}`);
    }
    await Listing.findByIdAndDelete(id);
    req.flash("success","Successfully deleted a listing!");
    res.redirect("/listings");
}
