<template>
  <div id="app">
    <Header title="Untitled Duck App" />
    <FeedingForm />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import FeedingForm from './components/FeedingForm.vue';

export default {
  components: {
    Header,
    FeedingForm,
  },
};
</script>

<style lang="less">
@import "./assets/variables.less";

body {
  background-color: @body-background-color;
  padding: 0;
  margin: 0;
}
#app {
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}
</style>
