import { Request, Response, NextFunction } from 'express'

const TestController = () => {
  const createFoo = (req: Request, res: Response, next: NextFunction) => {
    console.log('Create New Foo')
  }

  const getFoo = (req: Request, res: Response, next: NextFunction) => {
    console.log('All GET Foo request')
  }

  return { createFoo, getFoo }
}

export default TestController
