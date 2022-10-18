const Feed = (req, res) => {
    res.sendFile('/feed.html', { root: 'templates' });
}

export default Feed;
