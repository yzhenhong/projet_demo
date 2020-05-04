const user = {
  state: {
    userid: ''
  },
  mutations: {
    SET_USERID: (state, userid) => {
      state.userid = userid;
    }
  },
  actions: {
    setUserId({commit},userid){
      commit('SET_USERID', userid)
    },
  }
};

export default user;
