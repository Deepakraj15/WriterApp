import express from 'express';
import HomePage from '../controllers/HomePage.js';
import LoginPage from '../controllers/LoginPage.js';
import SignUp from '../controllers/SignUp.js';
import Feed from '../controllers/Feed.js';
import addUser from '../controllers/addUser.js';
import Verification from '../controllers/Verification.js';
import createPost from '../controllers/createPost.js';
import addPost from '../controllers/addPost.js';
const router = express.Router();

router.get('/', HomePage);
router.get('/login', LoginPage);
router.get('/signup', SignUp);
router.get('/feed', Feed);
router.post('/register', addUser);
router.post('/verification', Verification);
router.get('/createpost', createPost);
router.post('/addpost', addPost);

export default router;