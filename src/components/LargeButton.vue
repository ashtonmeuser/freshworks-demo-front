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
  height: 35px;
  background-color: #fff;
  border: none;
  border-bottom: 1px solid @input-border-color;
}
</style>
