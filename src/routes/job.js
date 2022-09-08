const { Router } = require("express");
const { getSingleJobController, createJobsController, getAllJobsController } = require("../controller/job.controller");
const { decodeToken } = require("../middleware/user.middleware");
const { ROUTES } = require("../utils/constants");


const router = Router();
const { ID, INDEX } = ROUTES;

router.post(INDEX, decodeToken, createJobsController);
router.get(INDEX, decodeToken, getAllJobsController);
router.get(ID, decodeToken, getSingleJobController);

module.exports = router;
