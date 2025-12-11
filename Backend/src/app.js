import express from "express"

const app = express(); // create an Express application

app.use(express.json()); // middleware to parse JSON request bodies

// routes imports
import userRouter from "../routes/user.route.js";

// routes declaration
app.use("/api/v1/users", userRouter);

// example route: http://localhost:4000/api/v1/users/register 

export default app;