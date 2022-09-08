const { findAllUserJobs, storeJobs, findSingleJob } = require("../repo/job.repo");

const createJobs = async (jobs, user) =>{
    try{
        const _jobs = jobs.map(job => job = {...job, user})
        await storeJobs(_jobs);
    } catch (error){
        throw error
    }
}

const getAllUserJobs = async (id) =>{
    try{
        const jobs = await findAllUserJobs(id);
        return {
            jobs
        }
    } catch (error){
        throw error
    }
}

const getSIngleJob = async (id) =>{
    try{
        const job = await findSingleJob(id);
        if(!job){
            return {
                statusCode: 404,
                message: "Job not found",
            }
        }
        return {
            job
        }
    } catch (error){
        throw error
    }
}

module.exports = {
    getSIngleJob,
    getAllUserJobs,
    createJobs
}