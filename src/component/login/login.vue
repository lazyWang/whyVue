<template>
    <div>
        <button @click='login'>login</button>        
        <button @click='isLogin'>login</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    uname: "admin",
                    upwd: "123456"
                }
            };
        },

        methods: {
            // 登陆
            login() {
                this.$http.post(this.$api.login, this.user)
                    .then(rsp => alert(rsp.data.message.realname));
            },

            // 判断是否已登陆
            isLogin() {
                this.$http.get(this.$api.islogin)
                    .then(rsp => alert(rsp.data.code));
            }
        }
    }
</script>

<style scoped>

</style>