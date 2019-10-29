<template>
  <div class="input-row">
    <div class="input-row-title">
      {{ title }}
    </div>
    <slot />
    <div
      v-if="!valid"
      class="error"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    valid: { type: Boolean, required: true },
    errorMessage: { type: String, default: 'Invalid input' },
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
  .error {
    color: darken(@error-background-color, 60%);
    padding: 10px;
    font-size: 0.8em;
    background-color: @error-background-color;
  }
}
</style>
