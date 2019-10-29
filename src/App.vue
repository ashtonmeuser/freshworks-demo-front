<template>
  <div id="app">
    <img
      class="logo"
      src="https://via.placeholder.com/140x140"
    >
    <FeedingForm />
  </div>
</template>

<script>
import FeedingForm from './components/FeedingForm.vue';

export default {
  components: {
    FeedingForm,
  },
};
</script>

<style lang="less">
@import "./assets/variables.less";

body {
  background-color: @body-background-color;
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 500px;
  margin: 20px auto;
  .logo {
    align-self: center;
    width: 140px;
    height: 140px;
  }
}
</style>
