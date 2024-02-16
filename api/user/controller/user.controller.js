

const userService = require("../service/user.service")


module.exports = {

    signup: async (req, res)=>{


        if(!req.query.name  || !req.query.email) return res.status(400).send({message: "Bad Request"})
        
        const {error: signupError, status: signupStatus, result: signupResult} =  await userService.signup(req.query)

        if(signupResult){
            const {error: loginError, status: loginStatus, result: loginResult} =  await userService.login(req.query)
            if(loginResult){
                res.status(signupStatus).send({...signupResult, login: loginResult})
            }else{
                res.status(signupStatus).send(signupResult)
            }
        }else{
            res.status(signupStatus).send(signupError)
        }
    }
}