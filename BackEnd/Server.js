// server.js
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { connectDB } from './Config/db.js';
import userRouter from './Routes/userRoute.js';
import taskRouter from './Routes/taskRoute.js';

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));;

// ✅ CORS (allow Vercel frontend)
app.use(cors({

  origin: 'https://task-management-system-theta-nine.vercel.app',
  credentials: true,
}));

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ MongoDB connection
connectDB();

// ✅ Routes
app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter);

// ✅ Health Check
app.get('/', (req, res) => {
  res.send('API is running');
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
