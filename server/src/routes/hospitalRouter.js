import express from 'express';
import { getHospitalDetail, getHospitalList, getHospitalType } from '../controllers/hospitalController.js';

const router = express.Router();

// hospital
router.get('/', getHospitalList);
router.get('/type', getHospitalType);
router.get('/:id', getHospitalDetail);

export default router;