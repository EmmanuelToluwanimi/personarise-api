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

const findUserById = async (id) => {
    return await User.findById(id);
}

module.exports = {
    storeUser,
    findUserById,
    findUserByUsername,
    findUserByEmail
}