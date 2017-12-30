'use strict';

exports.auth = (req, res, next) => {
    if (req.session.user) {
        res.locals.username = req.session.user._id;
        next();
    } else {
        res.render('user/signin');
    }
}

exports.menu = (req, res, next) => {
    res.locals.$menu =  $config.menu;
    next();
}
