import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import constants from '../constants';

Vue.use(Vuex);

const defaultFormValues = {
  location: { value: '', error: false },
  time: { value: '', error: false },
  foodType: { value: '', error: false },
  foodQuantity: { value: 1, error: false },
  duckQuantity: { value: 1, error: false },
};

export default new Vuex.Store({
  state: {
    form: { ...defaultFormValues },
  },
  mutations: {
    updateFormValue(state, payload) {
      state.form[payload.key].value = payload.value;
    },
    resetForm(state) {
      state.form = { ...defaultFormValues };
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
