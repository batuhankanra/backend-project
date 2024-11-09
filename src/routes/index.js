import {Router} from 'express'
import { authR } from './auth.js'
import { auditLogsR } from './auditsLog.js'
import { categorR } from './categories.js'

export const iApp=Router()



iApp.use('/auth',authR)
iApp.use('/categories',categorR)
iApp.use('/auditslog',auditLogsR)

