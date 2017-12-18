const mongoose = require('mongoose');
const crypto = require('crypto');
const moment = require('moment');
const Schema = mongoose.Schema;
const oAuthTypes = [
  'github',
];

const UserSchema = new Schema({
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    nickName: { type: String, default: '' },
    password: { type: String, default: '' },
    salt: { type: String, default: '' },// 供与密码加密
    authToken: { type: String, default: '' },
    github: {},
  });
UserSchema.methods = {
    authenticate: function (plainText) {
        return this.encryptPassword(plainText) === this.password;
    },
    makeSalt: function () {
        return Date.now();
    },
    encryptPassword: function (password) {
        if (!password) return '';
            try {
                return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');
            } catch (err) {
                return '';
        }
    },
    
}
mongoose.model('User', UserSchema);