<template>
  <span class="select-wrapper">
    <select v-model="internalValue">
      <option
        value=""
        selected
        disabled
        hidden
      >
        {{ placeholder }}
      </option>
      <option
        v-for="f in options"
        :key="f"
        :value="f"
      >
        {{ `${f.charAt(0).toUpperCase()}${f.slice(1)}` }}
      </option>
    </select>
  </span>
</template>

<script>
export default {
  props: {
    placeholder: { type: String, default: '' },
    value: { type: String, required: true },
    options: { type: Array, required: true },
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

.select-wrapper {
  background-color: @input-background-color;
  display: flex;
  flex-direction: column;
  border: none;
  border-bottom: 1px solid @input-border-color;
  select {
    appearance: none;
    background-color: transparent;
    box-sizing: border-box;
    height: @input-height;
    border: none;
    padding: 0 0.5em;
    font-size: 1.1em;
  }
}
</style>
