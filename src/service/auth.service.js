const { storeUser, findUserByUsername, findUserByEmail } = require("../repo/user.repo");
const {generateUid, hashPassword, comparePassword, accessTokenTtl} = require('../utils/constants');
const { signJwt } = require("../utils/jwt.utils");


const createUser = async (user) => {
    try {

        const userExists = await findUserByUsername(user.username);
        if (userExists) {
            return {
                statusCode: 400,
                message: "Username already exists"
            }
        }

        const checkEmail = await findUserByEmail(user.email);
        if (checkEmail) {
            return {
                statusCode: 400,
                message: "Email already exists"
            }
        }

        const uid = generateUid();
        user.password = await hashPassword(user.password);
        const newUser = await storeUser({...user, uid});
        const accessToken = signJwt({id: newUser.id}, {expiresIn: accessTokenTtl});

        return {
            user: {
                id: newUser.id,
                username: newUser.username,
            },
            accessToken
        }

    } catch (error) {
        throw error
    }
}

const loginUser = async (user) => {
    try {
        const userExists = await findUserByUsername(user.username);
        if (!userExists) {
            return {
                statusCode: 404,
                message: "Invalid credentials"
            }
        }

        const isPasswordValid = await comparePassword(user.password, userExists.password);
        if (!isPasswordValid) {
            return {
                statusCode: 401,
                message: "Invalid credentials"
            }
        }

        const accessToken = signJwt({id: userExists.id}, {expiresIn: accessTokenTtl});

        return {
            user: {
                id: userExists.id,
                username: userExists.username,
            },
            accessToken
        }
    } catch (error) {
        throw error
    }
}

module.exports = {
    createUser,
    loginUser
}