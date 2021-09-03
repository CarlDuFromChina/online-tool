<template>
  <a-form-model ref="form" :model="data" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-model-item label="XML格式化">
      <a-textarea v-model="data.value" :rows="20" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }" style="text-align: right">
      <a-button type="primary" @click="pack"> 压缩 </a-button>
      <a-button @click="format" style="margin-left: 10px">格式化</a-button>
      <a-button style="margin-left: 10px" @click="reset"> 清空 </a-button>
    </a-form-model-item>
    <div style="background: #ececec; padding: 30px 0">
      <a-card title="功能介绍">
        <p>可扩展标记语言，标准通用标记语言的子集，简称XML。是一种用于标记电子文件使其具有结构性的标记语言。</p>
      </a-card>
    </div>
  </a-form-model>
</template>

<script>
import { format, pack } from './xmlUtil';

export default {
  name: 'css',
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      data: {
        value: ''
      }
    };
  },
  methods: {
    reset() {
      this.data.value = '';
    },
    pack() {
      if (!sp.isNullOrEmpty(this.data.value)) {
        this.data.value = pack(this.data.value);
      } else {
        this.$message.error('请输入XML代码');
      }
    },
    format() {
      if (!sp.isNullOrEmpty(this.data.value)) {
        this.data.value = format(this.data.value);
      } else {
        this.$message.error('请输入XML代码');
      }
    }
  }
};
</script>
