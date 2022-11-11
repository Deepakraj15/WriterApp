import User from "../models/User.js";
const addUser = async (req, res) => {

    var AddUser = new User(req.body);
    try {
        await AddUser.save();
        res.send(AddUser);
    } catch (err) {
        res.send(err);
    }
}
export default addUser;