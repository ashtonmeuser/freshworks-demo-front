import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import constants from '../constants';

Vue.use(Vuex);

const validators = {
  location: v => typeof v === 'string' && v.match(/^.{4,}$/) !== null,
  time: v => typeof v === 'string' && v.match(/^\d{2}:\d{2}$/) !== null,
  foodType: v => typeof v === 'string' && constants.foodTypes.includes(v),
  foodQuantity: v => typeof v === 'number' && v > 0,
  duckQuantity: v => typeof v === 'number' && v > 0,
};
const defaultFormValues = {
  location: { value: '', valid: true },
  time: { value: '', valid: true },
  foodType: { value: '', valid: true },
  foodQuantity: { value: 1, valid: true },
  duckQuantity: { value: 1, valid: true },
};

export default new Vuex.Store({
  state: {
    form: { ...defaultFormValues },
    loading: false,
  },
  mutations: {
    updateFormValue(state, payload) {
      state.form[payload.key] = {
        value: payload.value,
        valid: validators[payload.key](payload.value),
      };
    },
    updateLoading(state, loading) {
      state.loading = loading;
    },
    resetForm(state) {
      state.form = { ...defaultFormValues };
    },
  },
  actions: {
    async submitForm(store) {
      // Submit form if all fields are valid
      store.commit('updateLoading', true);
      if (await store.dispatch('validateForm')) {
        await Axios.post(constants.endpoints.create, store.state.form);
      }
      store.commit('updateLoading', false);
    },
    validateForm(store) {
      // Update form fields current values, thus setting their respective valid properties
      let valid = true;
      Object.keys(store.state.form).forEach((key) => {
        store.commit('updateFormValue', { key, value: store.state.form[key].value });
        if (!store.state.form[key].valid) valid = false;
      });
      return valid;
    },
  },
});
