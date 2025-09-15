// const mongoose = require("mongoose");
// const Listing = require("./models/listing.js");

// const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

// async function main() {
//     await mongoose.connect(MONGO_URL);
//     console.log("connected to db");

//     // Clear reviews array from all listings
//     const result = await Listing.updateMany({}, { $set: { reviews: [] } });
//     console.log(`Updated ${result.modifiedCount} listings to clear reviews`);

//     await mongoose.disconnect();
// }

// main().catch(err => console.log(err));