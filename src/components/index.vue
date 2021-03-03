<template>
  <a-tabs default-active-key="1" @change="changeTab" class="index">
    <a-tab-pane key="1" tab="uuid生成">
      <uuid></uuid>
    </a-tab-pane>
    <a-tab-pane key="2" tab="AES加密/解密">
      <aes></aes>
    </a-tab-pane>
    <a-tab-pane key="3" tab="Base64加密/解密">
      <base64></base64>
    </a-tab-pane>
    <a-tab-pane key="4" tab="MD5加密">
      <md5></md5>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import uuid from './uuid';
import md5 from './md5';
import base64 from './base64';
import aes from './aes';

export default {
  name: 'index',
  components: { uuid, md5, base64, aes },
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

<style lang="less">
.index {
  max-width: 70%;
  margin: 0 auto !important;
}
.ant-tabs-nav-container {
  text-align: center;
}
</style>
