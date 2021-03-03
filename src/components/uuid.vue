<template>
  <a-form-model ref="form" :model="data" :rules="rules" layout="horizontal">
    <a-form-model-item label="生成数量" prop="count">
      <a-input-number v-model="data.count" :min="1" :max="10" />
    </a-form-model-item>
    <a-form-model-item label="生成的uuid">
      <a-input v-model="data.value" type="textarea" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="generate">
        生成
      </a-button>
      <a-button style="margin-left: 10px;" @click="reset">
        清空
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
export default {
  name: 'uuid',
  data() {
    return {
      data: {
        count: 1,
        value: ''
      },
      rules: {
        count: [
          { required: true, message: '请输入生成数量', trigger: 'blur' },
          { min: 1, max: 10, message: '生成数量大于1小于10', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    reset() {
      this.data.value = '';
    },
    generate() {
      this.data.value = sp.newUUID();
    }
  }
};
</script>

<style></style>
