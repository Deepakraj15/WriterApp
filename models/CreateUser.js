const mongoose = require('mongoose');

const CreateUser = new mongoose.Schema(
    {
        name: {
            type: 'string',
            required: true,
        }
    }
)
module.exports = mongoose.model('createuser', CreateUser);