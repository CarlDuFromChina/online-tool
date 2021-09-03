<template>
  <a-tabs v-model="tabIndex" @change="changeTab" class="index">
    <a-tab-pane key="0" tab="CSS">
      <css></css>
    </a-tab-pane>
    <a-tab-pane key="1" tab="XML">
      <xml></xml>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import css from './css';
import xml from './xml';

export default {
  name: 'format-index',
  components: { css, xml },
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
