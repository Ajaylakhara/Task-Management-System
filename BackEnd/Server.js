 import express from 'express';
 import'dotenv/config';
import cors from 'cors';
import { connectDB } from './Config/db.js';
import userRouter from './Routes/userRoute.js';
import taskRouter from './Routes/taskRoute.js';



 const app = express();
 const port = process.env.PORT || 4000;

    // Middleware
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // MongoDB connection
    connectDB();

    // Routes

    app.use('/api/users', userRouter);
    app.use('/api/tasks', taskRouter);

    app.get('/', (req, res) => {
        res.send('Api is running');
    });

    app.listen(port, () => {
        console.log(`Server started oh http://localhost:${port}`);
    });