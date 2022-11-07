import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            min: 4,
            max: 14,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        age: {
            type: Number,
            required: true,
        },
        profilepic: {
            type: String,
            default: ""
        },
        post: {
            type: Array,
            default: [],
        },
        isAdmin: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)
var User = mongoose.model('User', UserSchema);

export default User;