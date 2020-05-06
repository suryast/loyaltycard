import { Router } from 'express'
import TestController from '../controllers/TestController'

const router = Router()

router
  .route('/')
  .get(TestController().getFoo)
  .post(TestController().createFoo)

export default router
