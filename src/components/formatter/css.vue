<template>
  <a-form-model ref="form" :model="data" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-model-item label="CSS代码">
      <a-textarea v-model="data.orginValue" :rows="10" />
    </a-form-model-item>
    <a-form-model-item label="结果">
      <a-textarea v-model="data.value" :rows="10" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }" style="text-align: right">
      <a-button type="primary" @click="pack"> 压缩 </a-button>
      <a-button @click="format" style="margin-left: 10px">格式化</a-button>
      <a-button style="margin-left: 10px" @click="reset"> 清空 </a-button>
    </a-form-model-item>
    <div style="background: #ececec; padding: 30px 0">
      <a-card title="功能介绍">
        <p>CSS代码格式化工具可实现CSS代码格式化和CSS在线压缩。压缩CSS使得体积减小,传输速度快，格式化CSS在线转换成易编写、易读。</p>
      </a-card>
    </div>
  </a-form-model>
</template>

<script>
import { format, pack } from './cssUtil';

export default {
  name: 'css',
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      data: {
        orginValue: '',
        value: ''
      }
    };
  },
  methods: {
    reset() {
      this.data.value = '';
      this.data.orginValue = '';
    },
    pack() {
      if (!sp.isNullOrEmpty(this.data.orginValue)) {
        this.data.value = pack(this.data.orginValue);
      } else {
        this.$message.error('请输入css代码');
      }
    },
    format() {
      if (!sp.isNullOrEmpty(this.data.orginValue)) {
        this.data.value = format(this.data.orginValue);
      } else {
        this.$message.error('请输入css代码');
      }
    }
  }
};
</script>
