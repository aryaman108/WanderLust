// const mongoose = require("mongoose");
// const Review = require("./models/review.js");

// const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

// async function main() {
//     await mongoose.connect(MONGO_URL);
//     console.log("connected to db");

//     // Delete all reviews
//     const result = await Review.deleteMany({});
//     console.log(`Deleted ${result.deletedCount} reviews`);

//     await mongoose.disconnect();
// }

// main().catch(err => console.log(err));