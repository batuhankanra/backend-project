import { Router } from "express";
import { cAdd } from "../controller/categories/cAdd.js";


export const categorR=Router()


categorR.post('/add',cAdd)