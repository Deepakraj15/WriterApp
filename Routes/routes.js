import express from 'express';
import HomePage from '../controllers/HomePage.js';
import LoginPage from '../controllers/LoginPage.js';
import SignUp from '../controllers/SignUp.js';
import addUser from '../controllers/addUser.js';
import Verification from '../controllers/Verification.js';
import createPost from '../controllers/createPost.js';
import addPost from '../controllers/addPost.js';
import pageUnderConst from '../controllers/pageUnderConst.js';
import UserSettings from '../controllers/UserSettings.js';
import Feed from '../controllers/Feed.js';
const router = express.Router();

router.get('/', HomePage);
router.get('/login', LoginPage);
router.get('/signup', SignUp);
router.get('/feed', Feed);
router.post('/register', addUser);
router.post('/verification', Verification);
router.get('/createpost', createPost);
router.post('/addpost', addPost);
router.get('/pageUnderConst', pageUnderConst);
router.get('/settings',UserSettings)

export default router;