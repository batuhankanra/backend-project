import { Router } from "express";
import { aLView } from "../controller/auditsLog/aLView.js";



export const auditLogsR=Router()


auditLogsR.get('/',aLView)