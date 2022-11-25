import Post from "../models/Post.js";
const Feed =  (req, res) => {
    Post.find({}, (err, post) => {
        var name = req.cookies.cookieName;
       res.render('feed.ejs', {
           postList: post,
           uname: name
        })
    })

}

export default Feed;
