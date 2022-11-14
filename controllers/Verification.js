
import User from "../models/User.js";
const Verification = async (req, res) => {
    var data = 0;
    const output = await User.exists({ name: req.body.name, password: req.body.password });
    if (output === null) {
        data = 1
        console.log(data)
        res.render('login.ejs', { data: data });
    }
    else {
        var cookie = req.cookies.cookieName;
        if (cookie === undefined) {
            res.cookie('cookieName', `${req.body.name}`, {
                maxAge: 90000000,
                httpOnly: true,
            });
            console.log(cookie)
        }
        else {
            console.log(cookie+' already exist');
        }
        res.redirect('/feed');
    }


}
export default Verification;