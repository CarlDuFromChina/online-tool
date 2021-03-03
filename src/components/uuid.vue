<template>
  <a-form-model ref="form" :model="data" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-model-item label="生成数量" prop="count">
      <a-input type="number" v-model="data.count" />
    </a-form-model-item>
    <a-form-model-item label="生成">
      <a-textarea v-model="data.value" :rows="data.count > 5 ? 10 : 5" />
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
  methods: {
    reset() {
      this.data.value = '';
    },
    generate() {
      this.$refs.form.validate(resp => {
        if (resp) {
          const uuids = [];
          for (let i = 0; i < this.data.count; i++) {
            uuids.push(sp.newUUID());
          }
          this.data.value = uuids.join('\r\n');
        }
      });
    }
  }
};
</script>
