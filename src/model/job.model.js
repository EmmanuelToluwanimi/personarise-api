const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobId: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }
}, {
    timestamps: true
})

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;