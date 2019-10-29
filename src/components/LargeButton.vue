<template>
  <button @click="action">
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    action: { type: Function, required: true },
    title: { type: String, default: 'Submit' },
  },
};
</script>

<style scoped lang="less">
@import "../assets/variables.less";

button {
  height: 50px;
  background-color: @header-background-color;
  border: none;
  color: #fff;
  box-sizing: border-box;
  font-size: 1.2em;
  &:hover {
    cursor: pointer;
    background-color: darken(@header-background-color, 10%);
  }
}
</style>
