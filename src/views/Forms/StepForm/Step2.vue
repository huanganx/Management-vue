<template>
  <div>
    <a-card title="分步表单" style="margin-top:20px">
      <a-form :form="form">
        <a-form-item
          label="付款账户"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          {{ step.payAccount }}
        </a-form-item>
        <a-form-item
          label="收款账户"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          {{ step.receiverAccount.number }}
        </a-form-item>
        <a-form-item
          label="付款密码"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input
            type="password"
            v-decorator="[
              'password',
              {
                initialValue: '',
                rules: [{ required: true, message: '请输入付款密码' }]
              }
            ]"
            placeholder="请输入付款密码"
          />
        </a-form-item>
        <a-form-item
          :label-col="formTailLayout.labelCol"
          :wrapper-col="formTailLayout.wrapperCol"
        >
          <a-button type="primary" @click="handleSubmit">提交</a-button>
          <a-button style="margin-left:15px" @click="onPrev">上一步</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      formItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      },
      formTailLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14, offset: 4 }
      }
    };
  },
  computed: {
    step() {
      return this.$store.state.form.step;
    }
  },
  methods: {
    handleSubmit() {
      const { form, $store, step } = this;
      form.validateFields((error, values) => {
        if (!error) {
          $store.dispatch({
            type: "form/submitStepForm",
            payload: { ...step, ...values }
          });
        }
      });
    },
    onPrev() {
      this.$router.push("/form/step-form/info");
    }
  }
};
</script>
