const { ROUTES } = require("../utils/constants");
const authRouter = require("./auth");


const {HEALTHCHECK, AUTH} = ROUTES;

/**
 * 
 * @param app app is an express function
 */ 
function routes(app) {
    app.get(HEALTHCHECK, (req, res)=> {res.send("OK")});
    app.use(AUTH, authRouter);

}

module.exports = routes;