


const port = process.env.PORT || 5000

const app = require("./app")



app.listen(port, (req, res) => { 
    console.log("Server running ...")
})