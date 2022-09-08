const User = require('../model/user.model');

const storeUser = async (user) => {
    return await User.create(user);
}

const findUserByUsername = async (username) => {
    return await User.findOne({
        username
    });
}

const findUserByEmail = async (email) => {
    return await User.findOne({
        email
    });
}

const findUserById = async (uid) => {
    return await User.findOne({
        uid
    });
}

module.exports = {
    storeUser,
    findUserById,
    findUserByUsername,
    findUserByEmail
}