import {Router} from 'express'
import { authR } from './auth.js'
import { cAdd } from '../controller/categories/cAdd.js'
import { auditLogsR } from './auditsLog.js'

export const iApp=Router()



iApp.use('/auth',authR)
iApp.use('/categories',cAdd)
iApp.use('/auditslog',auditLogsR)

