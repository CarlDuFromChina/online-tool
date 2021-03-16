<template>
  <a-form-model ref="form" :model="data" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-model-item label="生成数量" prop="count">
      <a-input type="number" v-model="data.count" />
    </a-form-model-item>
    <a-form-model-item label="生成">
      <a-textarea v-model="data.value" :rows="10" />
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
          UUID全称：Universally Unique Identifier，即通用唯一识别码。 UUID是由一组32位数的16进制数字所构成，是故UUID理论上的总数为16^32 =
          2^128，约等于3.4 x 10^38。也就是说若每纳秒产生1兆个UUID，要花100亿年才会将所有UUID用完。
          UUID的标准型式包含32个16进制数字，以连字号分为五段，形式为8-4-4-4-12的32个字符，如：550e8400-e29b-41d4-a716-446655440000。
        </p>
      </a-card>
    </div>
  </a-form-model>
</template>

<script>
import { uuid } from 'web-core';
import autosize from 'autosize';

export default {
  name: 'uuid',
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      data: {
        count: 1,
        value: ''
      },
      rules: {
        count: [
          { required: true, message: '请输入生成数量', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value < 1 || value > 10) {
                return callback('生成数量大于1小于10');
              }
              return callback();
            }
          }
        ]
      }
    };
  },
  mounted() {
    autosize(document.querySelector('textarea'));
  },
  methods: {
    reset() {
      this.data.value = '';
    },
    generate() {
      this.$refs.form.validate(resp => {
        if (resp) {
          const uuids = [];
          for (let i = 0; i < this.data.count; i++) {
            uuids.push(uuid.generate());
          }
          this.data.value = uuids.join('\r\n');
        }
      });
    }
  }
};
</script>
