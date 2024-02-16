


// const userModel = require("../model/user.model")



module.exports = {
    signup : async(query)=>{



        // const result = await userModel.f

        return {error:null, status: 200 , result: query}

        // return {error:{message: "SOMETHING WENT WRONG"}, status: 500 , result: null}

    },

    login : (query)=>{


        return {error:null, status: 200 , result: {token: "HELLO TOKEN"}}

        // return {error:{message: "SOMETHING WENT WRONG"}, status: 500 , result: null}

    }
}