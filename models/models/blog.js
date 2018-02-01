const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    _id: { type: Object},
    password: { type: String, default: '' },
    salt: { type: String, default: '' },
    authToken: { type: String, default: '' },
    github: {},
  });
  mongoose.model('Blog', BlogSchema);