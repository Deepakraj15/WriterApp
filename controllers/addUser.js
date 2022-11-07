import User from "../models/User.js";
const addUser = async (req, res) => {

    var AddUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        isAdmin: false,
    });
    try {
        await AddUser.save();
        res.send(AddUser);
    } catch (err) {
        res.send(err);
    }
}
export default addUser;