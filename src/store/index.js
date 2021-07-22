import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: null,
    date: new Date(),
    place: null,
    places: [],
    race: 7,
  },
  mutations: {
    setEvents(state, payload) {
      state.events = payload
      state.places = payload.filter((event) => {
        const start = new Date(event.start)
        const end = new Date(event.end)
        return start <= state.date && state.date <= end
      }).map((event) => { return event.place })
      if(!state.places.some((place) => { return place === state.place })) {
        state.place = state.places[0]
      }
    },
    setDate(state, payload) {
      state.date = payload
      state.places = state.events.filter((event) => {
        const start = new Date(event.start)
        const end = new Date(event.end)
        const date = new Date(payload)
        return start <= date && date <= end
      }).map((event) => { return event.place })
      if(!state.places.some((place) => { return place === state.place })) {
        state.place = state.places[0]
      }
    },
    setPlace(state, payload) {
      state.place = payload
    },
    setRace(state, payload) {
      state.race = payload
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
