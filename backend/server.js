//will load env variables
//start the server

const app =require("./app")
const dotenv =require("dotenv")

//access the env variables
dotenv.config({path: "./config/config.env"})

//load env variables
//start server
app.listen(process.env.PORT,()=>{console.log(`Server started on PORT:${process.env.PORT}`)})