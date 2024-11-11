import { Router } from "express";
import { rViews } from "../controller/role/rViews.controller.js";
import { rAdd } from "../controller/role/rAdd.controller.js";
import { rUpdate } from "../controller/role/rUpdate.controller.js";
import { rDelete } from "../controller/role/rDelete.controller.js";


const roleR=Router()



roleR.get('/',rViews)
roleR.post('/add',rAdd)
roleR.post('/update',rUpdate)
roleR.post('/delete',rDelete)
export default roleR