import Post from "../models/Post.js";
const addPost = async (req, res) => {

    var AddPost = new Post(req.body);
    try {
        await AddPost.save();
        res.send(AddPost);
    } catch (err) {
        res.send(err);
    }
}
export default addPost;