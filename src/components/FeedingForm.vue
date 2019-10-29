<template>
  <div class="feeding-form">
    <InputRow title="Location">
      <TextInput v-model="location" />
    </InputRow>
    <InputRow title="Time">
      <TextInput v-model="time" />
    </InputRow>
    <InputRow title="Food">
      <SelectInput
        v-model="foodType"
        :options="constants.foodTypes"
      />
    </InputRow>
    <InputRow title="Food Quantity">
      <TextInput
        v-model.number="foodQuantity"
        type="number"
      />
    </InputRow>
    <InputRow title="Duck Quantity">
      <TextInput
        v-model.number="duckQuantity"
        type="number"
      />
    </InputRow>
    <LargeButton :action="submitForm" />
  </div>
</template>

<script>
import constants from '../constants';
import InputRow from './InputRow.vue';
import TextInput from './TextInput.vue';
import SelectInput from './SelectInput.vue';
import LargeButton from './LargeButton.vue';

const mapStateMutation = key => ({
  // Required setter and getter for all v-models
  // Call with state.form property key
  // Commits updateFormValue mutation with key and value
  get() {
    return this.$store.state.form[key].value;
  },
  set(value) {
    this.$store.commit('updateFormValue', { key, value });
  },
});

export default {
  components: {
    InputRow,
    TextInput,
    SelectInput,
    LargeButton,
  },
  computed: {
    time: mapStateMutation('time'),
    location: mapStateMutation('location'),
    foodType: mapStateMutation('foodType'),
    foodQuantity: mapStateMutation('foodQuantity'),
    duckQuantity: mapStateMutation('duckQuantity'),
  },
  beforeCreate() {
    this.constants = constants; // Constants accessible in template
  },
  methods: {
    submitForm() {
      this.$store.dispatch('submitForm');
    },
    validator(x) {
      return typeof x === 'string' && !x.includes('a');
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
