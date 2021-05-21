<template>
  <a-tabs v-model="tabIndex" @change="changeTab" class="index">
    <a-tab-pane key="0" tab="CSS">
      <css></css>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import css from './css';

export default {
  name: 'format-index',
  components: { css},
  data() {
    return {
      tabIndex: '0'
    };
  },
  methods: {
    changeTab(value) {
      this.tabIndex = value;
    }
  }
};
</script>

<style></style>
