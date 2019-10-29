<template>
  <input
    v-model="internalValue"
    :type="type"
    :placeholder="placeholder"
  >
</template>

<script>
export default {
  props: {
    placeholder: { type: String, default: '' },
    value: { type: [String, Number], required: true },
    type: { type: String, default: 'text' },
  },
  computed: {
    internalValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style scoped lang="less">
@import "../assets/variables.less";

input {
  background-color: @input-background-color;
  box-sizing: border-box;
  height: @input-height;
  border: none;
  border-bottom: 1px solid @input-border-color;
  padding: 0 0.5em;
  font-size: 1.1em;
}
</style>
