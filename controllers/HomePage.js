
const HomePage = (req, res) => {
    res.sendFile('/home.html', { root: 'templates' });

}

export default HomePage;