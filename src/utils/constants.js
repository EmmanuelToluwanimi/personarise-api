const bcrypt = require('bcrypt');

const PORT = process.env.PORT || 5000;

const secretKey = process.env.SECRET_KEY;
const algoType = "HS256";
const accessTokenTtl = "1h";
const refreshTokenTtl = "30d";
const saltRounds = 10;
const cookieTtl = 24 * 60 * 60 * 1000;

const ROUTES = {
    HEALTHCHECK: "/api/healthcheck",
    AUTH: "/api/auth",
    USER: "/api/user",
    LOGIN: "/login",
    REGISTER: "/signup",
    ID: "/:id",
    INDEX: "/",
};

const mongo_uri = () => {
    return process.env.NODE_ENV === 'production' ? process.env.MONGO_URI : 'mongodb://localhost:27017/personrise-demo'
}


const formatJoiMessage = (message) => {
    return message.replace('"', "").replace('"', "");
};

const generateUid = () => {
    return Math.ceil(Math.random()* 1000000).toFixed();
};

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
};

const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

/**
 * Handles management of all failed requests
 * @param res http response object
 */
function errorResponse({ res, message, error, status, statusCode = 500 }) {
    res.status(statusCode).json({ status, message, ...(error && { error }) });
}

/**
 * Handles sending responses to the front end.
 * @param res http response object
 */
function okResponse({ res, message, data, status, statusCode = 200 }) {
    res.status(statusCode).json({ status, message, ...(data && { data }) });
}

module.exports = {
    PORT,
    ROUTES,
    secretKey,
    mongo_uri,
    algoType,
    accessTokenTtl,
    refreshTokenTtl,
    saltRounds,
    cookieTtl,
    errorResponse,
    okResponse,
    formatJoiMessage,
    generateUid,
    hashPassword,
    comparePassword,
}