import express from 'express'
import { loginUser,registerUser,admimLogin } from '../controllers/userController.js'

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/admin', admimLogin);

export default userRouter;

