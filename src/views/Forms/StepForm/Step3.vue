<template>
  <div>
    <a-card style="margin-top:20px">
      <div style="text-align:center">
        {{ step.payAccount }},操作成功,预计两小时到账
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  computed: {
    step() {
      return this.$store.state.form.step;
    }
  }
};
</script>

<style></style>
