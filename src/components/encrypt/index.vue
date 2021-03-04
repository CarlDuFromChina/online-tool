<template>
  <a-tabs v-model="tabIndex" @change="changeTab" class="index">
    <a-tab-pane key="0" tab="AES加密/解密">
      <aes></aes>
    </a-tab-pane>
    <a-tab-pane key="1" tab="Base64加密/解密">
      <base64></base64>
    </a-tab-pane>
    <a-tab-pane key="2" tab="MD5加密">
      <md5></md5>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import md5 from './md5';
import base64 from './base64';
import aes from './aes';

export default {
  name: 'encrypt-index',
  components: { md5, base64, aes },
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
