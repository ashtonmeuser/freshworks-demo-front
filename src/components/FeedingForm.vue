<template>
  <div class="feeding-form">
    <InputRow
      :valid="$store.state.form.location.valid"
      error-message="Please enter a valid location (4+ characters)"
      title="Location"
    >
      <TextInput
        v-model="location"
        placeholder="Victoria, BC"
      />
    </InputRow>
    <InputRow
      :valid="$store.state.form.time.valid"
      error-message="Please enter a time in HH:MM format"
      title="Time"
    >
      <TextInput
        v-model="time"
        placeholder="HH:MM"
      />
    </InputRow>
    <InputRow
      :valid="$store.state.form.foodType.valid"
      error-message="Please select a valid food type"
      title="Food"
    >
      <SelectInput
        v-model="foodType"
        :options="constants.foodTypes"
        placeholder="Select food"
      />
    </InputRow>
    <InputRow
      :valid="$store.state.form.foodQuantity.valid"
      error-message="Please enter a food quantity greater than 0"
      title="Food Quantity"
    >
      <TextInput
        v-model.number="foodQuantity"
        type="number"
        placeholder="Amount of food"
      />
    </InputRow>
    <InputRow
      :valid="$store.state.form.duckQuantity.valid"
      error-message="Please enter a duck quantity greater than 0"
      title="Duck Quantity"
    >
      <TextInput
        v-model.number="duckQuantity"
        type="number"
        placeholder="Ducks fed"
      />
    </InputRow>
    <InputRow
      :valid="$store.state.form.schedule.valid"
      error-message="Please select a valid feeding schedule"
      title="Schedule Feeding"
    >
      <DayPicker v-model.number="schedule" />
    </InputRow>
    <LargeButton
      :disabled="$store.state.loading"
      :action="submitForm"
    />
  </div>
</template>

<script>
import constants from '../constants';
import InputRow from './InputRow.vue';
import TextInput from './TextInput.vue';
import SelectInput from './SelectInput.vue';
import DayPicker from './DayPicker.vue';
import LargeButton from './LargeButton.vue';

const mapStateMutation = (key) => ({
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
    DayPicker,
    LargeButton,
  },
  computed: {
    time: mapStateMutation('time'),
    location: mapStateMutation('location'),
    foodType: mapStateMutation('foodType'),
    foodQuantity: mapStateMutation('foodQuantity'),
    duckQuantity: mapStateMutation('duckQuantity'),
    schedule: mapStateMutation('schedule'),
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
  max-width: 500px;
  padding: 20px 10px;
  box-sizing: border-box;
  width: 100%;
  &>:not(:last-child) {
    margin-bottom: 20px;
  }
  &>:last-child {
    margin-top: 20px;
  }
}
</style>
