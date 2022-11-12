import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    postContent: {
        type: String,
    },
    authorName: {
        type: String,
        require: true,
        default: 'Indite User',

    },
    authorPic: {
        type: String,
        default: ''
    },
    comments: {
        type: Number,
    },
    commentList: {
        type: Array,
        default: [],
    },
    likes: {
        type: Number,
    },
    likeList: {
        type: Array,
        default: [],
    }
}, {
    timeStamps: true,
}
)

var Post = mongoose.model('Post', PostSchema);

export default Post;