const {authService} = require('../services/');
const httpStatus = require("http-status");

const authController = {
    async register(req,res){
        try{
            const {username, password, email} = req.body;
            const user = await authService.createUser(username, password, email);
            const token = await authService.genAuthToken(user);

            res.cookie('x-access-token', token)
            .status(httpStatus.CREATED).send({
                user,
                token
            })
        } catch(error) {
            res.status(httpStatus.BAD_REQUEST).send(error.message)
        }
    },

    async signin(req,res) {
        try {
            const {username, password, email} = req.body;
          
            user = await authService.signIn(email, password)
            const token = await authService.genAuthToken(user);
            res.cookie('x-access-token', token)
            
            .status(httpStatus.CREATED).send({
                user,
                token
            })
        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).send(error.message)
        }

    }
}

module.exports = authController