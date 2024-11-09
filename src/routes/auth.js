import { Router } from "express";
import { loginC } from "../controller/auth/login.controller.js";

export const authR=Router()


authR.post('/login',loginC)