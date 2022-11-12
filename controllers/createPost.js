const createPost = (req, res) => {
    res.sendFile('createPost.html', { root: 'templates' });
}
export default createPost;