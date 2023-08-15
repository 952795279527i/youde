export default {
  namespaced: true,
  state: {
    user: [
      {
        id: 1,
        name: "太阳",
        age: 99,
        sex: "男",
      },
      {
        id: 2,
        name: "月亮",
        age: 66,
        sex: "女",
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    screen(state) {
      return state.user.filter((item) => {
        return item.age > 80;
      });
    },
  },
};
