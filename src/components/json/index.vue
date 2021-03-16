<template>
  <a-tabs v-model="tabIndex" @change="changeTab" class="index">
    <a-tab-pane key="0" tab="JSON格式化">
      <json></json>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import json from './json';

export default {
  name: 'json-index',
  components: { json },
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
