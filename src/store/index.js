import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: null
  },
  mutations: {
    setEvents(state, payload) {
      state.events = payload
    }
  },
  actions: {
    async fetchEvents(store) {
      if (store.state.events !== null) return;

      const response = await fetch(
        'https://admob-app-id-5452967350.firebaseio.com/events.json'
      ).then((res) => {
        return res.json();
      });
      store.commit("setEvents", response);
    }
  },
  modules: {
  }
})
