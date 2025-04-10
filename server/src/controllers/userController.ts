import { Request, Response } from 'express';

export const googleLogin = async (req: Request, res: Response) => {
  res.json({
    message: 'Login'
  })
}

export const googleLogout = async (req: Request, res: Response) => {
  res.json({
    message: 'logout'
  })
}