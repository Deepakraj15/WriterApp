const LoginPage = (req, res) => {
    res.sendFile('login.html', { root: 'templates' });
}

export default LoginPage;