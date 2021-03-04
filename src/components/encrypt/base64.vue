<template>
  <a-form-model ref="form" :model="data" :label-col="labelCol" :wrapper-col="wrapperCol">
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
    <div style="background:#ECECEC; padding:30px 0">
      <a-card title="功能介绍">
        <p>
          Base64编码要求把3个8位字节（3*8=24）转化为4个6位的字节（4*6=24），之后在6位的前面补两个0，形成8位一个字节的形式。
          如果剩下的字符不足3个字节，则用0填充，输出字符使用‘=’，因此编码后输出的文本末尾可能会出现1或2个‘=’。为了保证所输出的编码位可读字符，Base64制定了一个编码表，以便进行统一转换。编码表的大小为2^6=64，这也是Base64名称的由来
        </p>
      </a-card>
    </div>
  </a-form-model>
</template>

<script>
export default {
  name: 'base64',
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
    encode() {
      if (!sp.isNullOrEmpty(this.data.orginValue)) {
        this.data.value = this.data.orginValue.toBase64String();
      } else {
        this.$message.error('请输入加密内容');
      }
    },
    decode() {
      if (!sp.isNullOrEmpty(this.data.value)) {
        this.data.orginValue = this.data.value.toStringFromBase64();
      } else {
        this.$message.error('请输入解密内容');
      }
    }
  }
};
</script>
