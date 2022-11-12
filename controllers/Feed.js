import Post from "../models/Post.js";
const Feed = (req, res) => {
    Post.find({}, (err, post) => {
        res.render('feed.ejs', {
            postList: post
        })
    })

}

export default Feed;
