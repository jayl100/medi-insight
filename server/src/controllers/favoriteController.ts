import { Request, Response } from 'express';

export const postFavorite = async (req: Request, res: Response) => {
  res.json({
    message: 'Favorite was successfully',
  })
}

export const deleteFavorite = async (req: Request, res: Response) => {
  res.json({
    message: 'Favorite deleted successfully',
  })
}