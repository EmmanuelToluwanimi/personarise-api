const { ROUTES } = require("../utils/constants");
const authRouter = require("./auth");
const jobRouter = require("./job");



const {HEALTHCHECK, AUTH, JOB} = ROUTES;

/**
 * 
 * @param app app is an express function
 */ 
function routes(app) {
    app.get(HEALTHCHECK, (req, res)=> {res.send("OK")});
    app.use(AUTH, authRouter);
    app.use(JOB, jobRouter);
}

module.exports = routes;