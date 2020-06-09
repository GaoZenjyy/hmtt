<template>
  <div>
    <van-nav-bar title="登录" />
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="mobile"
        left-icon="phone-o"
        name="手机号"
        placeholder="请输入手机号"
        :rules="[{ pattern:/^1[3456789]\d{9}$/, message: '请填正确的手机号码' }]"
      />
      <van-field
        v-model="code"
        left-icon="orders-o"
        type="password"
        name="验证码"
        placeholder="请输入验证码"
        :rules="[{ pattern:/^\d{6}$/, message: '请填写6位验证码' }]"
      >
        <template #button>
          <!-- <van-button class="yzm" size="small" round type="primary" @click="yzm">获取验证码</van-button> -->
          <van-count-down :time="time" format="ss" auto-start />
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button block type="info" >登录</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mobile: "", //手机号码
      code: "" ,//验证码
      time:"60000"//
    };
  },
  methods: {
    onSubmit() {},
    yzm() {
      console.log(123);
    }
  }
};
</script>
<style lang="less" >
</style>