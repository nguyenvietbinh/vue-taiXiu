// store.js
import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      sharedData: 'Initial data'
    };
  },
  mutations: {
    updateData(state, newData) {
      state.sharedData = newData;
    }
  },
  actions: {
    updateDataAction({ commit }, newData) {
      commit('updateData', newData);
    }
  },
  getters: {
    getSharedData(state) {
      return state.sharedData;
    }
  }
});
