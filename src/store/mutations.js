import * as types from './mutation-types.js'

const mutations = {
    [types.LOGIN]: (state, data) => {
        localStorage.token = data.token;
        state.token = data.token;
    },
    [types.LOGOUT]: (state) => {
        localStorage.removeItem('token');
        state.token = null
    },
    [types.RELOGIN]: (state, data) => {
        localStorage.token = data;
        state.token = data;
    }
}

export default mutations
