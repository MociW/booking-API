import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
import cookieParser from 'cookie-parser';

config();
const app = express();

const db = async () => {
    try {
        mongoose.connect(process.env.MONGODB);
        console.log('Connected to MongoDB');
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on('disconnected', () => {
    console.log('mongoDB disconnected');
});

//middlewares
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

app.use((err, req, res, next) => {
    const errStatus = err.status || 500;
    const errMessage = err.message || 'Something went wrong';
    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: err.stack,
    });
});

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(8800, () => {
    db();
    console.log('Connected to Server');
});
