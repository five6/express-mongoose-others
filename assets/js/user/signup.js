const app = new Vue({
    el: '#app',
    data() {
        return {
            policy: false,
            user: {
                _id: '',
                password:''
            }
        }
    },
    methods: {
        commit(){
            const self = this;
            if(this.policy && this.user._id && this.user.password)
            $.ajax({
                url: '/user/api/signup',
                data: JSON.stringify(self.user),
                type: 'post',
                contentType: 'application/json',
                success: function (ret) {
                    if(ret.code === 0)
                        window.location.href = '/';
                }
            })
        }
    }
})