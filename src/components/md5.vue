<template>
  <a-form-model ref="form" :model="data" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-model-item label="加密内容" prop="orginValue">
      <a-input v-model="data.orginValue" />
    </a-form-model-item>
    <a-form-model-item label="加密后结果">
      <a-textarea v-model="data.value" :rows="5" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }" style="text-align: right">
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
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      data: {
        orginValue: '',
        value: ''
      },
      rules: {
        orginValue: [{ required: true, message: '请输入您需要加密的内容', trigger: 'blur' }]
      }
    };
  },
  methods: {
    reset() {
      this.data.value = '';
    },
    generate() {
      this.$refs.form.validate(resp => {
        if (resp) {
          this.data.value = sp.md5Encrypt(this.data.orginValue);
        }
      });
    }
  }
};
</script>
