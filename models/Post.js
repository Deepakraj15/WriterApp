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
        default: 0,
    },
    commentList: {
        type: Array,
        default: [],
    },
    likes: {
        type: Number,
        default: 0,
    },
    likeList: {
        type: Array,
        default: [],
    },
    bgColor:{
        type: String,
    },
    fontColor: {
        type: String,
        default: 'black',
    }
}, {
    timeStamps: true,
}
)

var Post = mongoose.model('Post', PostSchema);

export default Post;