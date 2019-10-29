<template>
  <button
    :disabled="disabled"
    @click="action"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    action: { type: Function, required: true },
    title: { type: String, default: 'Submit' },
    disabled: { type: Boolean, default: false },
  },
};
</script>

<style scoped lang="less">
@import "../assets/variables.less";

button {
  font-weight: bold;
  height: 50px;
  background-color: @header-background-color;
  border: none;
  color: #fff;
  box-sizing: border-box;
  font-size: 1.2em;
  &:hover:enabled,
  &:active:enabled {
    cursor: pointer;
    background-color: darken(@header-background-color, 10%);
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
}
</style>
