import express from "express";
import env from "dotenv";
import cors from "cors";
import morgan from "morgan";
import dbConnection from "./config/db.js";


// import 404 route handler and stack provider
import { NotFound, errorhandler } from "./middleware/errorHandling.js"

//import All routes
import homeRoute from "./routes/homeRoute.js"
import userAccount from "./routes/userAccountRoute.ja"


const app = express();
env.config();

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(morgan('dev'));


//connect to the database
dbConnection();



// -------ALL ROUTES-------//

// home route
app.use("/", homeRoute);

// user account route
app.use("/users", userAccount);




//For error handling
app.use(NotFound);
app.use(errorhandler);






// making the port dynamic
const PORT = process.env.PORT || 5000


//starting the server
app.listen(PORT, function () {
    console.log(`server has started at port no ${PORT}`);
})