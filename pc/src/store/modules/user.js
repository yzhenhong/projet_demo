const user = {
  namespaced:true,
  state: {
    userid: '',
    token: '',
    userName:'',
  },
  mutations: {
    SET_USERID: (state, userid) => {
      state.userid = userid;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USERNAME:(state, userName) => {
      state.userName = userName;
    }
  },
  actions: {
    setUserId({commit},userid){
      commit('SET_USERID', userid)
    },
    setToken({commit},token){
      commit('SET_TOKEN', token)
    },
    setUserName({commit},userName){
      commit('SET_USERNAME',userName)
    },
  }
};

export default user;