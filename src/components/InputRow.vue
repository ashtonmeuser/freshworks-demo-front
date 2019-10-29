<template>
  <div class="input-row">
    <div class="input-row-title">
      {{ title }}
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
  },
};
</script>

<style scoped lang="less">
@import "../assets/variables.less";

.input-row {
  display: flex;
  flex-direction: column;
  .input-row-title {
    color: @input-title-color;
    font-size: 0.8em;
  }
}
</style>
