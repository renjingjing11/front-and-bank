import axios from "axios";

export function userLogin(params) {

    // api是代理过的 为了解决跨域问题
    const url = "/api/user/login";
    axios.post(url, params)
}