import { Router } from "express";
import { cView } from "../controller/categories/cView.controller.js";
import { cAdd } from "../controller/categories/cAdd.controller.js";
import { cUpdate } from "../controller/categories/cUpdate.controller.js";
import { cDelete } from "../controller/categories/cdelete.Controller.js";


export const categorR=Router()

categorR.get('/',cView)
categorR.post('/add',cAdd)
categorR.post('/update',cUpdate)
categorR.post('/delete',cDelete)