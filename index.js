import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

config();
const app = express();

const db = async () => {
    try {
        mongoose.connect(process.env.MONGODB);
        console.log("Connected to MongoDB");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
});

//middlewares

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((req, res, next) => {
    console.log("Hello Middleware");
});

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(8080, () => {
    db();
    console.log("Connected to Server");
});
