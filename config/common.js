'use strict';

const config = {
    LOG_DIR: __dirname + '/../logs',
    TMP_DIR: __dirname + '/../tmp',
    UPLOAD_DIR: __dirname + '/../uploads',
    menu: [
        {
            link: '/', title: '主页',
        },
        {
            link: '/blogs', title: '博客',
        },
        {
            link: null, title: '个人中心',
            submenu: [
                {
                    link: '/user/profile', title: '我的主页',
                },
                {
                    link: '/blogs/create', title: '写博客'
                }
            ],
        },
    ]
}
module.exports = config;
