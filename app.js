

const express = require("express")

const path = require("path")
const app = express()


// const userRoute =  require("./api/user/config/user.route")
// const profileRoute = require("./api/profie/config/profile.route")


// app.use("/user", userRoute)
// app.use("/profile", profileRoute)

const fs =  require("fs")
const directoryPath = './api';
// Read the contents of the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return;
  }
  // Filter out only directories
  const directories = files.filter(fileName => {
    return fs.statSync(path.join(directoryPath, fileName)).isDirectory()
  });
//   // Log the list of directories

directories.map(i=> app.use(`/${i}`, require(`./api/${i}/config/${i}.route`)))
  console.log('Directories:', directories);
});

app.use(express.static(path.join(__dirname, "views")))


module.exports =  app