import { Request, Response } from 'express';

export const getList = async (req: Request, res: Response) => {
  res.json({
    message: 'Hospital List',
  })
}

export const getDetail = async (req: Request, res: Response) => {
  res.json({
    message: 'Hospital Detail',
  })
}