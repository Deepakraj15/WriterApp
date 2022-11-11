
import User from "../models/User.js";
const Verification = async (req, res) => {
    const output = await User.exists({ name: req.body.name, password: req.body.password });
    if (output === null) {
        res.redirect('/login');
    }
    else {
        res.redirect('/feed');
    }


}
export default Verification;