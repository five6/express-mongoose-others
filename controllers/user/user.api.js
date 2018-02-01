var express = require('express');
var mongoose = require('mongoose');
var app = $app;
var router = express.Router();
var middleware = require('../_filters/auth');
const UserModel = mongoose.model('User');
router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/signout', middleware.auth, signout);
async function signIn(req, res, next) {
    $logger.info('用户登陆');
    const body = req.body;
    await UserModel.findOne({
        _id: body._id
    }).then(user => {
        if (user) {
            const flag = user.authenticate(body.password);
            if (flag) {
                req.session.user = user;
                res.redirect('/');
            } else {
                res.redirect('/user/signin');
            }

        } else {
            res.redirect('/user/signin');
        }

    }).catch(e => {
        $logger.error(e);
        res.redirect('/user/signin');
    });
}
async function signUp(req, res, next) {
    const user = new UserModel(req.body);
    const salt = user.makeSalt();
    user.salt = salt;
    const password = user.encryptPassword(req.body.password);
    user.password = password;
    let ret;
    try {
        ret = await user.save();
        ret = ret.toJSON();
        req.session.user = ret;
        res.json({
            code: 0,
            message: '注册成功'
        })
    } catch (e) {
        console.log(e);
        res.json({
            code: -1,
            message: '注册失败'
        })
    }

}

async function signout(req, res, next) {
    req.session.user = null;
    res.redirect('/user/signin');
}

$app.use('/user/api', router);