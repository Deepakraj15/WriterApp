const mongoose = require('mongoose');

const CreateUser = new mongoose.Schema(
    {
        name: {
            type: 'string',
            required: true,
        },
        email: {
            type: 'email',
            required: true,
        },
        password: {
            type: 'string',
            required: true,
        },
        age: {
            type: 'integer',
            required: true,
        }
    }
)
module.exports = mongoose.model('createuser', CreateUser);