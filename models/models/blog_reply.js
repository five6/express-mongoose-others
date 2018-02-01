const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogReplySchema = new Schema({
    _id: { type: Object },
    content: { type: String },
    blogId: { type: String },
    replyId: { type: String },
    author_user: { type: String },
    stars: { type: Array, default: [] },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
    deleted: { type: Boolean, default: false },
});
mongoose.model('BlogReply', BlogReplySchema);