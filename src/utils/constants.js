
const PORT = process.env.PORT || 5000; 
const ROUTES = {
    HEALTHCHECK: "/api/healthcheck",
    AUTH: "/api/auth",
    USER: "/api/user",
    LOGIN: "/login",
    REGISTER: "/signup",
    ID: "/:id",
    INDEX: "/",
};

module.exports = {
    PORT,
    ROUTES
}