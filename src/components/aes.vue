<template>
  <a-form-model ref="form" :model="data" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-model-item label="密码">
      <a-input v-model="data.key"></a-input>
    </a-form-model-item>
    <a-form-model-item label="加密前内容">
      <a-textarea v-model="data.orginValue" :rows="5" />
    </a-form-model-item>
    <a-form-model-item label="加密后结果">
      <a-textarea v-model="data.value" :rows="5" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }" style="text-align: right">
      <a-button type="primary" @click="encode">
        加密
      </a-button>
      <a-button @click="decode" style="margin-left: 10px;">解密</a-button>
      <a-button style="margin-left: 10px;" @click="reset">
        清空
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import * as util from '../utils/aesUtil';

export default {
  name: 'aes',
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      data: {
        orginValue: '',
        value: '',
        key: ''
      }
    };
  },
  methods: {
    reset() {
      this.data.value = '';
      this.data.orginValue = '';
      this.data.key = '';
    },
    encode() {
      if (!sp.isNullOrEmpty(this.data.orginValue)) {
        this.data.value = util.encrypt(this.data.orginValue, this.data.key);
      } else {
        this.$message.error('请输入加密内容');
      }
    },
    decode() {
      if (!sp.isNullOrEmpty(this.data.value)) {
        this.data.orginValue = util.decrypt(this.data.value, this.data.key);
      } else {
        this.$message.error('请输入解密内容');
      }
    }
  }
};
</script>
