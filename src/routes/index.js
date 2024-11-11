import {Router} from 'express'
import { authR } from './auth.js'
import { auditLogsR } from './auditsLog.js'
import { categorR } from './categories.js'
import roleR from './role.js'

export const iApp=Router()



iApp.use('/auth',authR)
iApp.use('/categories',categorR)
iApp.use('/role',roleR)
iApp.use('/auditslog',auditLogsR)

