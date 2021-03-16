<template>
  <div>
    <div class="menu">
      <a-menu :default-selected-keys="['uuid']" mode="horizontal" theme="dark" @click="menuClick">
        <a-menu-item key="uuid">UUID</a-menu-item>
        <a-menu-item key="encrypt">编码/加密</a-menu-item>
        <a-menu-item key="json">JSON 工具 </a-menu-item>
        <a-menu-item key="formatter" disabled>格式化 </a-menu-item>
        <a-menu-item key="service" disabled>服务 </a-menu-item>
      </a-menu>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    menuClick(item) {
      const { keyPath } = item;
      this.$router.push({ path: `/index/${keyPath[0]}` });
    }
  }
};
</script>

<style lang="less">
.menu {
  background: #001529;
}

.ant-menu {
  text-align: left !important;
  max-width: 70% !important;
  margin: 0 auto !important;
}

.index {
  max-width: 70%;
  margin: 0 auto !important;
  background: white;
}
</style>
