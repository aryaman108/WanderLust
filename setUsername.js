// const mongoose = require("mongoose");
// const User = require("./models/user.js");

// const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

// async function main() {
//     await mongoose.connect(MONGO_URL);
//     console.log("connected to db");

//     // Find the aryan user and set username if not set
//     const aryanUser = await User.findOne({ username: 'aryan' });
//     if (aryanUser) {
//         console.log("Aryan user found, username:", aryanUser.username);
//     } else {
//         // If not found by username, find by email or something
//         // Assuming email is aryan@ something, but since not specified, perhaps find all users
//         const users = await User.find({});
//         console.log("Users:", users.map(u => ({ id: u._id, email: u.email, username: u.username })));
//     }

//     await mongoose.disconnect();
// }

// main().catch(err => console.log(err));