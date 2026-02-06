import express from 'express';
import http from 'http';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './lib/db.js';

//created express and http server
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

//Middle wears 
app.use('/api/test',(req,res) => {
  res.send("hello guys");
});
app.use(express.json( { limit: "4mb" } ));
app.use(cors());

//Mongo db
await connectDB();

/* server listing on port 5000 */
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});