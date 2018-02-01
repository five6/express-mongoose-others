'use strict';
const _ = require('lodash');
const url = require('url');
exports.auth = (req, res, next) => {
    if (req.session.user) {
        res.locals.username = req.session.user._id;
        next();
    } else {
        res.render('user/signin');
    }
}

exports.menu = (req, res, next) => {
    const menu = _.map(_.cloneDeep($config.menu), side => {
        if (side.submenu) {
            _.each(side.submenu, child => {
                if (url.parse(req.originalUrl).pathname === child.link) {
                    child.active = 'active';
                    side.active = 'active';
                }
            });
        } else {
            if (url.parse(req.originalUrl).pathname === side.link) {
                side.active = 'active';
            }
        }
        return side;
    });
    res.locals.$menu = menu;
    next();
}
