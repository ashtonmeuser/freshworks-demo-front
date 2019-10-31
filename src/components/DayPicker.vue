<template>
  <ol class="day-picker">
    <li
      v-for="d in 'UMTWRFS'.split('')"
      :key="d"
      :value="d"
      :class="{ active: value.includes(d) }"
    >
      <button
        :data-weekday="d"
        @click="toggleDay"
      >
        {{ d }}
      </button>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    value: { type: String, required: true },
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
  methods: {
    toggleDay(event) {
      const { weekday } = event.target.dataset;
      const activeDays = this.value.includes(weekday)
        ? this.value.replace(weekday, '') : `${this.value}${weekday}`;
      const test = 'UMTWRFS'.split('').filter((v) => activeDays.includes(v)).join('');
      this.internalValue = test;
    },
  },
};
</script>

<style scoped lang="less">
@import "../assets/variables.less";

.day-picker {
  display: flex;
  height: @input-height;
  border: none;
  border-bottom: 1px solid @input-border-color;
  margin: 0.5em 0 0 0;
  box-sizing: border-box;
  padding: 0;
  li {
    flex-grow: 1;
    list-style-type: none;
    button {
      padding: 0;
      background-color: transparent;
      width: 100%;
      height: 100%;
      border: none;
      font-size: 1.1em;
      color: fade(#000, 20%);
    }
    &.active {
      background-color: @day-picker-active-color;
      button {
        color: #fff;
      }
    }
  }
}
</style>
