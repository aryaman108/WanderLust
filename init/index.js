const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

main().then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB=async()=>{
    await Listing.deleteMany({});
    const listingsWithCloudinary = await Promise.all(initData.data.map(async (obj) => {
        let imageUrl = obj.image.url;
        let filename = obj.image.filename;
        if (imageUrl && !imageUrl.includes('cloudinary')) {
            try {
                const result = await cloudinary.uploader.upload(imageUrl, {
                    folder: 'Wanderlust_DEV'
                });
                imageUrl = result.secure_url;
                filename = result.public_id;
            } catch (error) {
                console.error(`Error uploading ${obj.title}:`, error);
            }
        }
        return {
            ...obj,
            image: { url: imageUrl, filename: filename },
            owner: "64a7f1f4f2a30c6f4d3e8b9b",
        };
    }));
    await Listing.insertMany(listingsWithCloudinary);
    console.log("data was initialised with Cloudinary images");
};

initDB();