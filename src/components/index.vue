<template>
  <div>
    <a-menu mode="horizontal" style="text-align: center" theme="dark" @click="menuClick">
      <a-sub-menu key="encrypt">
        <span slot="title"><span>编码/加密</span></span>
        <a-menu-item key="1">
          MD5 加密
        </a-menu-item>
        <a-menu-item key="2">
          AES 加密/解密
        </a-menu-item>
        <a-menu-item key="3">
          BASE64 编码/解码
        </a-menu-item>
        <a-menu-item key="json" disabled>JSON 工具 </a-menu-item>
      </a-sub-menu>
    </a-menu>
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
  </div>
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
      tabIndex: '1',
      menus: ['encrypt', 'json']
    };
  },
  methods: {
    changeTab(value) {
      this.tabIndex = value;
    },
    menuClick(item) {
      console.log(item);
    }
  }
};
</script>

<style lang="less">
.index {
  max-width: 70%;
  margin: 0 auto !important;
  background: white;
}
.ant-tabs-nav-container {
  text-align: center;
}
</style>
