import express from 'express'
import { checkAuth, Login, SignUp } from '../controllers/UserController.js';
import { protectRoute } from '../middleware/auth.js';


const userRouter = express.Router();

userRouter.post('/sighup', SignUp);
userRouter.post('/login', Login);
userRouter.get('/check', protectRoute, checkAuth);

export default userRouter;

