import express from "express";

const route = express.Router();


route.post("/signup", registerUser)



export default route;