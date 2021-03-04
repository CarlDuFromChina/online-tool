<template>
  <a-tabs v-model="tabIndex" @change="changeTab" class="index">
    <a-tab-pane key="0" tab="uuid生成">
      <uuid></uuid>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import uuid from './uuid';

export default {
  name: 'uuid-index',
  components: { uuid },
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
