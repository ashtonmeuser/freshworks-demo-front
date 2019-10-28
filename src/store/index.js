import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import constants from '../constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form: {
      location: null,
      time: null,
      foodType: null,
      foodQuantity: 1,
      duckQuantity: 1,
    },
  },
  mutations: {
    updateLocation(state, location) {
      state.form.location = location;
    },
    updateTime(state, time) {
      state.form.time = time;
    },
    updateFoodType(state, foodType) {
      if (!constants.foodTypes.includes(foodType)) return;
      state.form.foodType = foodType;
    },
    updateFoodQuantity(state, foodQuantity) {
      state.form.foodQuantity = foodQuantity;
    },
    updateDuckQuantity(state, duckQuantity) {
      state.form.duckQuantity = duckQuantity;
    },
  },
  actions: {
    async submitForm({ state }) {
      await Axios.post(constants.endpoints.create, state.form);
    },
  },
  modules: {
  },
});
