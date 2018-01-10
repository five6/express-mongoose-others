


$(function () {
    QC.Login({
        btnId: "qqLoginBtn"	//插入按钮的节点id
    });
    WB2.anyWhere(function (W) {
        W.widget.connectButton({
            id: "wb_connect_btn",
            type: "3,2",
            callback: {
                login: function (o) {	//登录后的回调函数
                    console.log(o);
                },
                logout: function () {	//退出后的回调函数
                }
            }
        });
    });
})