'use strict';

exports.auth = (req, res ,next) => {
    console.log('auth');
    next();
    // if(req.session.user) {
    //     next();
    // }else {
    //     res.render('/login');
    // }
} 
