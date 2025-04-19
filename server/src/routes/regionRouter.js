import express from 'express';
import { getDistrictsByRegion, getRegion } from '../controllers/regionController.js';

const router = express.Router();

// region
router.get('/', getRegion);

// district
router.get('/:regionId/districts', getDistrictsByRegion);

export default router;