const Job = require('../model/job.model');

const findAllUserJobs = async (id) => {
    return await Job.find({user: id}).populate({ path: 'user', select: ["username", "email"]})
}

const storeJobs = async (jobs) => {
    return await Job.create(jobs);
}

const findSingleJob = async (id) => {
    return await Job.findOne({jobId: id})
}

module.exports = {
    findAllUserJobs,
    storeJobs,
    findSingleJob
}