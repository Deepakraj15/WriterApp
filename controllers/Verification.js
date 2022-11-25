
import User from "../models/User.js";
import Post from "../models/Post.js";

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
        if (cookie == undefined) {
            res.cookie('cookieName', `${req.body.name}`);
        }
        else {
            console.log(cookie+' already exist');
        }
        var name = req.body.name;
        Post.find({}, (err, post) => {
       res.render('feed.ejs', {
           postList: post,
           uname:"deepak"
       })
            
    })
        
    }


}
export default Verification;