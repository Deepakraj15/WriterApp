const mongoose = require('mongoose');

const LoginUser = mongoose.Schema({
    name:
    {
        type: String,
        required: true,
    },
    password:
    {
        type: String,
        required: true,
    },
    auth:
    {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model('loginuser', loginUser);