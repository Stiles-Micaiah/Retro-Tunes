import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const api = axios.create({
  baseURL: "https://itunes.apple.com/search?term="
});


export default new Vuex.Store({
  state: {
    results: []
  },
  mutations: {
    setResults(state, results) {
      state.results = results;
    }
  },
  actions: {
    getResualts({ dispatch, commit }, query) {
      api.get("" + query)
        .then(res => {
          commit("setResults", res.data.results);
          console.log("getResults Input!", query);
          console.log("getResults Output!", res);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
});
