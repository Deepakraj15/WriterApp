import express from 'express';
import HomePage from '../controllers/HomePage.js';
import LoginPage from '../controllers/LoginPage.js';
import SignUp from '../controllers/SignUp.js';
const router = express.Router();

router.get('/', HomePage);
router.get('/login', LoginPage);
router.get('/signup', SignUp)
//router.post('/loginVerfications', LoginVerfication);
export default router;