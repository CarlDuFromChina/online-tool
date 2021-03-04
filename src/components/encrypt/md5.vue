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
    <div style="background:#ECECEC; padding:30px 0">
      <a-card title="功能介绍">
        <p>
          MD5信息摘要算法（英语：MD5 Message-Digest Algorithm），一种被广泛使用的密码散列函数，可以产生出一个128位（16字节）的散列值（hash
          value），用于确保信息传输完整一致。MD5由美国密码学家罗纳德·李维斯特（Ronald Linn
          Rivest）设计，于1992年公开，用以取代MD4算法。这套算法的程序在 RFC 1321
          标准中被加以规范。1996年后该算法被证实存在弱点，可以被加以破解，对于需要高度安全性的数据，专家一般建议改用其他算法，如SHA-2。2004年，证实MD5算法无法防止碰撞（collision），因此不适用于安全性认证，如SSL公开密钥认证或是数字签名等用途。
        </p>
      </a-card>
    </div>
  </a-form-model>
</template>

<script>
import { encrypt } from 'web-core';

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
          this.data.value = encrypt.md5.encrypt(this.data.orginValue);
        }
      });
    }
  }
};
</script>
