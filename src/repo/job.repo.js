const Job = require('../model/job.model');

const findAllUserJobs = async (id) => {
    return await Job.find({user: id})
    .sort({ createdAt: -1 })
    .populate({ path: 'user', select: ["username", "email"]});
}

const storeJobs = async (jobs) => {
    return await Job.create(jobs);
}

const findSingleJob = async (id) => {
    return await Job.findOne({jobId: id}).populate({ path: 'user', select: ["username", "email"]});
}

module.exports = {
    findAllUserJobs,
    storeJobs,
    findSingleJob
}