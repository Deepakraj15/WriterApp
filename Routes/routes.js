import express from 'express';
import HomePage from '../controllers/HomePage.js';
import LoginPage from '../controllers/LoginPage.js';
const router = express.Router();

router.get('/', HomePage);
router.get('/login', LoginPage);
export default router;