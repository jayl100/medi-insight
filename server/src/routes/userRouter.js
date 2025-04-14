import express from 'express';
import { googleLogin, googleLogout } from '../controllers/userController.js';

const router = express.Router();

// favorite
router.get('/', googleLogin);
router.delete('/', googleLogout);

export default router;