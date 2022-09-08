const { ROUTES } = require("../utils/constants");


const {HEALTHCHECK} = ROUTES;

/**
 * 
 * @param app app is an express function
 */ 
function routes(app) {
    app.get(HEALTHCHECK, (req, res)=> {res.send("OK")});

}

module.exports = routes;