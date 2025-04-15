import express from 'express';
import { deleteFavorite, postFavorite } from '../controllers/favoriteController.js';
import { getDevice } from '../controllers/deviceController.js';

const router = express.Router();

// devices
router.get('/', getDevice);

export default router;