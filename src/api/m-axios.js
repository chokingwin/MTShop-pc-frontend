import axios from 'axios'
import store from '../store'
import * as types from '../store/mutation-types'
import router from '../router'

// axios 配置
axios.defaults.timeout = 5000;

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.token = store.state.token;
            config.headers.contentType = 'application/json';
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT);
                    router.replace({
                        path: '/login'
                    })
                    break;
            }
        }
        return Promise.reject(error.response.data)
    }
);

export default axios;
