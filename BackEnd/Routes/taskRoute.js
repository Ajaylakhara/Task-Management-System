import express from "express";
import authMiddleware from '../Middleware/auth.js';
import { createTask, deleteTask, getTasks, getTaskById, updateTask } from "../Controllers/taskController.js";













const taskRoute = express.Router();



taskRoute.route('/gp').get(authMiddleware, getTasks).post(authMiddleware, createTask);
taskRoute.route('/:id/gp').get(authMiddleware, getTaskById).put(authMiddleware, updateTask).delete(authMiddleware, deleteTask);

export default taskRoute;