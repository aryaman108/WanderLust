const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const User = require("./models/user.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("connected to db");

    // Find or create aryan user
    let user = await User.findOne({ username: 'aryan' });
    if (!user) {
        console.log("Aryan user not found, creating...");
        user = new User({ username: 'aryan', email: 'aryan@example.com' });
        await User.register(user, 'password');
    }

    // Update all listings to set owner to the user
    const result = await Listing.updateMany(
        {},
        { $set: { owner: user._id } }
    );

    console.log(`Updated ${result.modifiedCount} listings to owner: ${user.username}`);

    await mongoose.disconnect();
}

main().catch(err => console.log(err));