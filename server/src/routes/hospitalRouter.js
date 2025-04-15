import express from 'express';
import { getDetail, getHospitalType, getList } from '../controllers/hospitalController.js';

const router = express.Router();

// hospital
router.get('/', getList);
router.get('/type', getHospitalType);
router.get('/:id', getDetail);

export default router;