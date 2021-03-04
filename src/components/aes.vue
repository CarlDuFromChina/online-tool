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
    <div style="background:#ECECEC; padding:30px 0">
      <a-card title="功能介绍">
        <p>
          AES,高级加密标准（英语：Advanced Encryption
          Standard，缩写：AES），在密码学中又称Rijndael加密法，是美国联邦政府采用的一种区块加密标准。这个标准用来替代原先的DES，已经被多方分析且广为全世界所使用。
          严格地说，AES和Rijndael加密法并不完全一样（虽然在实际应用中二者可以互换），因为Rijndael加密法可以支持更大范围的区块和密钥长度：AES的区块长度固定为128
          比特，密钥长度则可以是128，192或256比特；而Rijndael使用的密钥和区块长度可以是32位的整数倍，以128位为下限，256比特为上限。包括AES-ECB,AES-CBC,AES-CTR,AES-OFB,AES-CFB
        </p>
      </a-card>
    </div>
  </a-form-model>
</template>

<script>
import { encrypt } from 'web-core';

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
        this.data.value = encrypt.aes.encrypt(this.data.orginValue, this.data.key);
      } else {
        this.$message.error('请输入加密内容');
      }
    },
    decode() {
      if (!sp.isNullOrEmpty(this.data.value)) {
        this.data.orginValue = encrypt.aes.decrypt(this.data.value, this.data.key);
      } else {
        this.$message.error('请输入解密内容');
      }
    }
  }
};
</script>
