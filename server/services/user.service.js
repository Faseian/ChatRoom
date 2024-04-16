const {User} = require('../models/user');
const httpStatus = require('http-status');

const findUserByEmail = async(email) => {
    return await User.findOne({email})
    //Make both functions one that queries for email then username to find account
}

const findUserByUsername = async(username) => {
    return await User.findOne({username})
    
}

module.exports = {
    findUserByEmail,
    findUserByUsername
};