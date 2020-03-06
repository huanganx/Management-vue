<template>
  <div>
    <a-card title="分步表单" style="margin-top:20px">
      <a-form :form="form">
        <a-form-item
          label="付款账户"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <a-input
            v-decorator="[
              'payAccount',
              {
                initialValue: step.payAccount,
                rules: [{ required: true, message: '请输入付款账户' }]
              }
            ]"
            placeholder="请输入付款账户"
          />
        </a-form-item>
        <a-form-item
          label="收款账户"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <ReceiverAccount
            v-decorator="[
              'receiverAccount',
              {
                initialValue: step.receiverAccount,
                rules: [
                  {
                    required: true,
                    message: '请输入收款账户',
                    validator: (rule, value, callback) => {
                      if (value && value.number) {
                        callback();
                      } else {
                        callback(false);
                      }
                    }
                  }
                ]
              }
            ]"
            placeholder="请输入收款账户"
          />
        </a-form-item>
        <a-form-item
          :label-col="formTailLayout.labelCol"
          :wrapper-col="formTailLayout.wrapperCol"
        >
          <a-button type="primary" @click="handleSubmit">下一步</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
import ReceiverAccount from "../../../components/ReceiverAccount";
export default {
  components: {
    ReceiverAccount
  },
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
      const { form, $router, $store } = this;
      form.validateFields((error, values) => {
        if (!error) {
          $store.commit({
            type: "form/saveStepFormData",
            payload: values
          });
          $router.push("/form/step-form/confirm");
        }
      });
    }
  }
};
</script>

<style></style>
