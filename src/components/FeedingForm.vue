<template>
  <div class="feeding-form">
    <input v-model="location">
    <input v-model="time">
    <select v-model="foodType">
      <option v-for="f in constants.foodTypes" :key="f" :value="f">
        {{ f }}
      </option>
    </select>
    <button v-on:click="submitForm"></button>
  </div>
</template>

<script>
import constants from '../constants';

const mapStateMutation = (name, mutation) => ({
  // Required setter and getter for all v-models
  // Call with state.form property name and optional mutation name
  // Uses default mutation format of camel-cased `update{name}`
  get() {
    return this.$store.state.form[name];
  },
  set(value) {
    const defaultMutation = `update${name.charAt(0).toUpperCase()}${name.slice(1)}`;
    this.$store.commit(mutation || defaultMutation, value);
  },
});

export default {
  beforeCreate() {
    this.constants = constants; // Constants accessible in template
  },
  computed: {
    time: mapStateMutation('time'),
    location: mapStateMutation('location'),
    foodType: mapStateMutation('foodType'),
  },
  methods: {
    submitForm() {
      this.$store.dispatch('submitForm');
    },
  },
};
</script>

<style scoped lang="less">
.feeding-form {
  display: flex;
  flex-direction: column;
}
</style>
