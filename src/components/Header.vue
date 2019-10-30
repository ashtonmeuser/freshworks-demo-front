<template>
  <div class="header-container">
    <img
      class="header-logo"
      src="../assets/duck.svg"
    >
    <h1 class="header-title">
      {{ title }}
    </h1>
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

.header-container {
  background-color: @header-background-color;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  .header-logo {
    align-self: center;
    width: 117px;
    height: 140px;
  }
  .header-title {
    color: #fff;
    font-size: 1.4em;
    margin: 10px 0 0 0;
    text-align: center;
  }
}
</style>
