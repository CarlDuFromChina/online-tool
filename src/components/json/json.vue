<template>
  <a-form-model ref="form" :rules="rules" :model="data" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-model-item label="内容" prop="value">
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
          功能点：[JSON压缩] 、[JSON转义]
        </p>
        <ul>
          <li>[JSON压缩]：将JSON压缩成一行，去掉换行和空格字符。</li>
          <li>[JSON转义]：将JSON中的双引号("")前面添加转义符号(\)，利于拼接字符串。</li>
        </ul>
      </a-card>
    </div>
  </a-form-model>
</template>

<script>
function format(str) {
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
}
export default {
  name: 'json',
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
      rules: {
        value: [{ required: true, message: '请输入内容', trigger: 'blur' }]
      },
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
      this.$refs.form.validate(resp => {
        if (resp) {
          this.data.value = format(this.data.value);
        }
      });
    },
    stringify() {
      this.$refs.form.validate(resp => {
        if (resp) {
          this.data.value = this.data.value
            .replace(/[ ]/g, '')
            .replace(/[\r\n]/g, '')
            .replace(/[\t]/g, '');
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.textarea_line {
  display: inline-block;
}
</style>
