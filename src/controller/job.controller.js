const { createJobs, getAllUserJobs, getSIngleJob } = require("../service/job.service");
const { okResponse, errorResponse } = require("../utils/constants");


const createJobsController = async (req, res)=> {

    try {
        const user = req?.user;
        const {jobs} = req.body;
        if(jobs.length < 1){
            return errorResponse({
                res,
                statusCode: 400,
                status: "fail",
                message: "Invalid request format"
            });
        }

        await createJobs(jobs, user);

        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "Jobs created successfully",
        })
    } catch (error) {
        console.log(error?.message || error);
        return errorResponse({
            res,
            status: "fail",
            message: "Error occurred while processing your request",
        })
    }
}

const getAllJobsController = async (req, res)=> {
    const { id: userId } = req?.user;

    try {
        const {jobs} = await getAllUserJobs(userId);
        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "Successful request",
            data: jobs
        })
    } catch (error) {
        console.log(error?.message || error);
        return errorResponse({
            res,
            status: "fail",
            message: "Error occurred while processing your request",
        })
    }
}

const getSingleJobController = async (req, res)=> {
    const { id } = req.params;

    try {
        const {job} = await getSIngleJob(id);
        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "Successful request",
            data: job
        })
    } catch (error) {
        console.log(error?.message || error);
        return errorResponse({
            res,
            status: "fail",
            message: "Error occurred while processing your request",
        })
    }
}

module.exports = {
    getSingleJobController,
    getAllJobsController,
    createJobsController
}