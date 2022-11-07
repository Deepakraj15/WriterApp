import express from 'express';
import HomePage from '../controllers/HomePage.js';
import LoginPage from '../controllers/LoginPage.js';
import SignUp from '../controllers/SignUp.js';
import Feed from '../controllers/Feed.js';
import addUser from '../controllers/addUser.js';
const router = express.Router();

router.get('/', HomePage);
router.get('/login', LoginPage);
router.get('/signup', SignUp);
router.get('/feed', Feed);
router.get('/register', addUser);

export default router;