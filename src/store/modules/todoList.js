export default {
  namespaced: true,
  state: {
    datasource: [],
  },
  getters: {
    datasource: (state) => state.datasource,
  },
  actions: {
    index({ commit }) {
      try {
        commit('SET_DATA', true);
      } catch (error) {
        console.error(error);
      }
    },
    store({ commit }, data) {
      try {
        let id = Math.floor(Math.random() * 1000000e3);
        if (data.description) {
          let task = Object.assign({ id, done: false }, { ...data });
          commit('SET_DATASOURCE', task);
        }
      } catch (error) {
        console.error(error);
      }
    },
    remove({ commit }, id) {
      try {
        commit('REMOVE', id);
      } catch (error) {
        console.error(error);
      }
    },
    done({ commit }, id) {
      try {
        commit('DONE', id);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mutations: {
    SET_DATASOURCE(state, payload) {
      state.datasource.push(payload);
      return state;
    },
    REMOVE(state, id) {
      state.datasource = state.datasource.filter((task) => task.id != id);
      return state;
    },
    DONE(state, id) {
      state.datasource = state.datasource.map((task) => {
        if (task.id == id) {
          task.done = true;
        }
        return task;
      });
      return state;
    },
  },
};
