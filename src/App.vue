<template>
  <div id="app">
    <FeedingForm/>
  </div>
</template>

<script>
import FeedingForm from './components/FeedingForm.vue';

export default {
  name: 'app',
  components: {
    FeedingForm,
  },
};
</script>

<style lang="less">
#app {
}
</style>
