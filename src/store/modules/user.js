import {login, getInfo, logout} from "../../api/user"
import {getToken, setToken, removeToken} from "../../utils/token"

//for login success setting
const state = {
  token: getToken(),
  name: '',
  roles: []
};
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
};

const actions = {
  // user login
  login({commit}, userInfo) {
    const {username, password} = userInfo;

    return new Promise((resolve, reject) => {
      login({username: username.trim(), password: password.trim()}).then(response => {
        //解析响应数据
        const {data} = response;
        console.log('响应数据如下：', data);

        if (data.token) { //此处data.token 根据实际情况修改
          setToken(data.token);
          commit('SET_TOKEN', data.token)
        }
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({commit, state}) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const {data} = response;
        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const {roles, name} = data;
        if (!roles || roles.length <= 0) {
          reject('roles must be a non-null array!')
        }

        commit('SET_NAME', name);
        commit('SET_ROLES', roles);

        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({commit, state, dispatch}) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '');
        commit('SET_NAME', '');
        commit('SET_ROLES', []);
        removeToken();

        dispatch('login', null, {root: true});

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}