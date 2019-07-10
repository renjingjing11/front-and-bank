<template>
    <div>
       <input type="text"><br/>
       <input type="text"><br/>
       <button @click="login">登陆</button>
    </div>
</template>
<script>
// 引入的是  传到后台的用户名和密码
import {userLogin} from "@/api/userLogin.js";
export default {
    name:"Login",
    data(){
        return {
            loginForm:{
                userName:"",
                password:""
            }
        }
    },
    methods:{
        login(){
            userLogin(this.loginForm)
        }
    }
}
</script>
<style  lang="scss">

</style>