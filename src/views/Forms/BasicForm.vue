<template>
  <a-card title="基础表单" style="margin-top:15px">
    <a-form :form="form">
      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="用户名"
      >
        <a-input
          v-decorator="[
            'username',
            {
              initialValue: 'Admin',
              rules: [
                { required: true, min: 4, message: '用户名必须大于4个字符' }
              ]
            }
          ]"
          placeholder="请输入用户名"
        />
      </a-form-item>
      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="密码"
      >
        <a-input
          type="password"
          v-decorator="[
            'password',
            {
              rules: [{ required: true, message: '请输入密码' }]
            }
          ]"
          placeholder="请输入密码"
        />
      </a-form-item>
      <a-form-item
        :label-col="formTailLayout.labelCol"
        :wrapper-col="formTailLayout.wrapperCol"
      >
        <a-checkbox
          v-decorator="[
            'remember',
            {
              initialValue: false
            }
          ]"
        >
          记住密码
        </a-checkbox>
      </a-form-item>
      <a-form-item
        :label-col="formTailLayout.labelCol"
        :wrapper-col="formTailLayout.wrapperCol"
      >
        <a-button type="primary" @click="check">
          提交
        </a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
import { message } from "ant-design-vue";
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
};
export default {
  data() {
    return {
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: "dynamic_rule" })
    };
  },
  mounted() {
    setTimeout(() => {
      this.form.setFieldsValue({
        username: "User"
      });
    }, 3000);
  },
  methods: {
    check() {
      this.form.validateFields((err, values) => {
        if (!err) {
          console.info(values);
          Object.assign(this, values);
          message.success(this.username + "🎉恭喜您,登陆成功~");
        }
      });
    }
  }
};
</script>
