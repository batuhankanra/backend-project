import { Router } from "express";
import { loginC } from "../controller/auth/login.controller.js";
import { registerC } from "../controller/auth/register.controller.js";

export const authR=Router()


authR.post('/login',loginC)
authR.post('/register',registerC)