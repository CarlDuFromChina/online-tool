<template>
  <a-form-model ref="form" :model="data" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-model-item label="内容">
      <a-textarea v-model="data.value" :autoSize="{ minRows: 10, maxRows: 20 }" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 18, offset: 4 }" style="text-align: right">
      <a-button type="primary" @click="parse">
        转义
      </a-button>
      <a-button style="margin-left: 10px;" @click="stringify">
        压缩
      </a-button>
      <a-button style="margin-left: 10px" @click="reset">
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
export default {
  name: 'json',
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
      data: {
        value: ''
      }
    };
  },
  methods: {
    reset() {
      this.data.value = '';
    },
    parse() {
      var str = this.data.value;
      var stack = []; //栈-用于括号匹配
      var tmpStr = ''; //新格式化JSON字符串
      var len = str.length; //原始JSON长度

      //遍历每一个字符
      for (let i = 0; i < len; i++) {
        //当遇到结构块起始结构
        if (str[i] == '{' || str[i] === '[') {
          //起始结构后面直接换行
          tmpStr += str[i] + '\n';

          //入栈
          stack.push(str[i]);

          //这里的意思是结构块起始的下一行开始就会有一个缩进，缩进量与遇到的结构块起始符个数成正比1:1
          tmpStr += '\t'.repeat(stack.length);
        }
        //当遇到结构块结束符
        else if (str[i] == ']' || str[i] === '}') {
          //因为本身JSON格式是固定的，所以括号一定是成对的，这里先不考虑错误的json数据
          //遇到结束符就退栈，
          stack.pop();

          //结束符本身输出到下一行，并减少一个缩进
          tmpStr += '\n' + '\t'.repeat(stack.length) + str[i];
        }
        //当遇到逗号的时候
        else if (str[i] == ',') {
          //逗号后方直接换行，以及下一行的缩进处理
          tmpStr += str[i] + '\n' + '\t'.repeat(stack.length);
        } else {
          //其他字符直接复制
          tmpStr += str[i];
        }
      }
      this.data.value = tmpStr;
    },
    stringify() {
      this.data.value = JSON.stringify(this.data.value);
    }
  }
};
</script>
