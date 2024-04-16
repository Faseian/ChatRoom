const httpStatus = require('http-status');
const {User} = require('../models/user');
const userService = require('./user.service');

const createUser = async(username,password,email) => {
    try {
        if(await User.emailTaken(email)){
            throw new Error("Sorry email taken");
        }
        if(await User.usernameTaken(username)){
            throw new Error("Sorry username taken");
        }

        const user = new User ({
            username,
            email,
            password
        });
        await user.save();
        return user;
    } catch (error) {
        throw error;
    }
}

const genAuthToken = (user) => {
    const token = user.generateAuthToken();
    return token;
}

const signIn = async(username, password, email) => {
    try {
        const userEmail = await userService.findUserByEmail(email) 
        const userUsername = await userService.findUserByUsername(username);
        console.log(userEmail);
        console.log(userUsername);
        if(!(userEmail) || !(userUsername)) {
            throw new Error("Sorry bad email or username");
        }
        if(!(await user.comparePassword(password))) {
            throw new Error('Sorry bad password');
        }
    } catch (error) {
        throw error
    }
}

module.exports = {
    createUser,
    genAuthToken,
    signIn
}