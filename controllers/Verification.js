
import User from "../models/User.js";
const Verification = async (req, res) => {
    const output = await User.exists({ name: req.body.name, password: req.body.password });
    if (output === null) {
        res.redirect('/login');
    }
    else {
        if (req.cookies.cookieName === undefined) {
            res.cookie('cookieName', `${req.body.name + Math.floor(Math.random() * 10)}`, {
                secure: true,
                maxAge: 7000,
            });
            console.log('cookie has been successfully stored ' + req.cookies.cookieName)
        }
        else {
            console.log(req.cookies.cookieName);
        }
        res.redirect('/feed');
    }


}
export default Verification;