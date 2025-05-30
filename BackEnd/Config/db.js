import mongoose from "mongoose";


export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://TaskManagement:Ajay@taskcluster0.6q72axx.mongodb.net/Taskflow').then(()=>console.log("DB Connected"));
}