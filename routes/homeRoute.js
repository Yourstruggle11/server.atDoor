import  express  from "express";

const route = express.Router();


route.get("/", function(req, res){
    res.send("Welcome to atDoor E-commerce backend")
})

export default route;