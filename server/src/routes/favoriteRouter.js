import express from 'express';
import { deleteFavorite, postFavorite } from '../controllers/favoriteController.js';

const router = express.Router();

// favorite
router.post('/', postFavorite);
router.delete('/:id', deleteFavorite);

export default router;