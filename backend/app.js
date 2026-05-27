import express from 'express';
import http from 'http';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './lib/db.js';
import userRouter from './Routes/userRoutes.js';
import messageRouter from './Routes/msgRoutes.js';
import { Server } from 'socket.io';
import { log } from 'console';

//created express and http server
const app = express();
const server = http.createServer(app);

//server for socket.io
export const io = new Server(server,{
  cors: {origin: "*"}
})
//store online users 
export const userSocketMap = {};
//socket.io connection 
io.on("connection" ,(socket)=>{
  const userId = socket.handshake.query.userId;
  console.log("User connected" , userId);
  
  if(userId) userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  io.on("disconnect", ()=>{
    console.log("user disconnected", userId);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers",Object.keys(userSocketMap));
  })
})

//Middleare 
app.use(express.json( { limit: "4mb" } ));
app.use(cors());

//setup routes
app.use('/api/test',(req,res) => res.send("server running successfully"));
app.use('/api/auth', userRouter);
app.use('/api/messages',messageRouter);

//connect Mongodb
await connectDB();

/* server listing on port 5000 */
if(process.env.NODE_ENV !== "production"){
  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
// Export server for Vervel
export default server;