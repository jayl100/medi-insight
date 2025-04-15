import express from 'express';
import { deleteFavorite, postFavorite } from '../controllers/favoriteController.js';
import { getDistrict, getRegion } from '../controllers/regionController.js';

const router = express.Router();

// region
router.get('/', getRegion);

// district
router.get('/', getDistrict);

export default router;