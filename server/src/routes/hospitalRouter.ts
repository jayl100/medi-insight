import express from 'express';
import { getDetail, getList } from '../controllers/hospitalController';

const router = express.Router();

// hospital
router.get('/', getList);
router.get('/:id', getDetail);

export default router;