import express from 'express'
import { protectRoute } from '../middleware/auth.js';
import { getMsg, getUsersForSide, markmsgsen, sendMsg } from '../controllers/MsgController.js';

const messageRouter = express.Router();

messageRouter.get("/users" , protectRoute, getUsersForSide);
messageRouter.get("/:id" , protectRoute, getMsg);
messageRouter.get("/mark/:id" , protectRoute, markmsgsen);
messageRouter.post("/send/:id" , protectRoute , sendMsg);

export default messageRouter;

