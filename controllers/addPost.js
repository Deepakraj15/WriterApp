import Post from "../models/Post.js";
const addPost = async (req, res) => {

    var AddPost = new Post({
        postContent: req.body.postContent,
        authorName: req.cookies.cookieName,
        bgColor: req.body.colorPick
    });
    try {
        console.log(req.cookies.cookieName)
        await AddPost.save();
        res.render('createPost.ejs');
    } catch (err) {
        res.send(err);
    }
}
export default addPost;