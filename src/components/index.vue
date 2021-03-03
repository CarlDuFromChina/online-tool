<template>
  <a-tabs default-active-key="1" @change="changeTab">
    <a-tab-pane key="1" tab="uuid生成">
      <uuid></uuid>
    </a-tab-pane>
    <a-tab-pane key="2" tab="AES加密/解密" force-render>
      Content of Tab Pane 2
    </a-tab-pane>
    <a-tab-pane key="3" tab="Base64加密/解密">
      Content of Tab Pane 3
    </a-tab-pane>
    <a-tab-pane key="4" tab="MD5加密">
      <md5></md5>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import uuid from './uuid';
import md5 from './md5';

export default {
  name: 'index',
  components: { uuid, md5 },
  data() {
    return {
      tabIndex: '1'
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
