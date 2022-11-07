const SignUp = (req, res) => {
    res.sendFile('signup.html', { root: 'templates' });
}

export default SignUp;