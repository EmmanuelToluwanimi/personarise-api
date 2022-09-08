const {mongo_uri} = require('../utils/constants')
const mongoose = require('mongoose');

const connectDb = async()=>{
    try {

        if(!mongo_uri) {
            throw new Error("Provide a valid mongo_uri");
        }

        await mongoose.connect(mongo_uri());
        console.log("Connected to MongoDB");

        return;

    } catch (error) {
        console.log('Error connecting to mongoDB: ' + error);
        process.exit(1);
    }
}

module.exports = {
    connectDb
}
