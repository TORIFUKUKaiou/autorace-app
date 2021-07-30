import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: null,
    date:
      new Date().getHours() < 17
        ? new Date().setDate(new Date().getDate() - 1)
        : new Date(),
    place: null,
    places: [],
    race: 7,
  },
  mutations: {
    setEvents(state, payload) {
      state.events = payload;
    },
    setDate(state, payload) {
      state.date = payload;
      state.places = state.events
        .filter((event) => {
          const start = new Date(event.start);
          const end = new Date(event.end);
          const date = new Date(payload);
          return start <= date && date <= end;
        })
        .map((event) => {
          return event.place;
        });
      if (
        !state.places.some((place) => {
          return place === state.place;
        })
      ) {
        state.place = state.places[0];
      }
    },
    setPlace(state, payload) {
      state.place = payload;
    },
    setRace(state, payload) {
      state.race = payload;
    },
    setPlaces(state, payload) {
      const events = payload.events;
      const date = new Date(payload.date);

      state.places = events
        .filter((event) => {
          const start = new Date(event.start);
          const end = new Date(event.end);
          return start <= date && date <= end;
        })
        .map((event) => {
          return event.place;
        });
    },
    maybeChangePlace(state) {
      if (
        !state.places.some((place) => {
          return place === state.place;
        })
      ) {
        state.place = state.places[0];
      }
    },
  },
  actions: {
    async fetchEvents(store) {
      if (store.state.events !== null) return;

      const response = await fetch(
        "https://admob-app-id-5452967350.firebaseio.com/events.json"
      ).then((res) => {
        return res.json();
      });
      store.commit("setEvents", response);
      store.commit("setPlaces", { events: response, date: store.state.date });
      store.commit("maybeChangePlace");
    },
  },
  modules: {},
});
