// const mongoose = require("mongoose");
// const Listing = require("./models/listing.js");
// const User = require("./models/user.js");

// const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

// async function main() {
//     await mongoose.connect(MONGO_URL);
//     console.log("connected to db");

//     // Find the aryan user
//     const aryanUser = await User.findOne({ username: 'aryan' });
//     if (!aryanUser) {
//         console.log("Aryan user not found");
//         return;
//     }

//     // Update all listings without owner to set owner to aryan
//     const result = await Listing.updateMany(
//         { owner: { $exists: false } }, // or { owner: null }
//         { $set: { owner: aryanUser._id } }
//     );

//     console.log(`Updated ${result.modifiedCount} listings`);

//     await mongoose.disconnect();
// }

// main().catch(err => console.log(err));