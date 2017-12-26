'use strict';

exports.auth = (req, res ,next) => {
    console.log('auth');
    console.log(req.session);
    next();
    // if(req.session.user) {
    //     next();
    // }else {
    //     res.render('/login');
    // }
} 
