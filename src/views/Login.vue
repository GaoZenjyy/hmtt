<template>
  <div>
    <van-nav-bar title="登录" />
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="mobile"
        left-icon="phone-o"
        name="mobile"
        placeholder="请输入手机号"
        :rules="[{ pattern:/^1[3456789]\d{9}$/, message: '请填正确的手机号码' }]"
      />
      <van-field
        v-model="code"
        left-icon="orders-o"
        type="password"
        name="code"
        placeholder="请输入验证码"
        :rules="[{ pattern:/^\d{6}$/, message: '请填写6位验证码' }]"
      >
        <template #button>
          <van-button v-if="isyzm" class="yzm" size="small" round type="primary" @click="yzm">获取验证码</van-button>
          <van-count-down v-else :time="time" format="ss秒" @finish="enddjs" />
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button block type="info">登录</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { sendCode } from "@/utils/api.js";

export default {
  data() {
    return {
      mobile: "", //手机号码
      code: "", //验证码
      time: 60000, // 倒计时
      isyzm: true //点击时开启倒计时
    };
  },
  methods: {
    onSubmit(value) {
      console.log(value);
    },
    // 点击是获取验证码
    yzm() {
      if (!this.mobile == "") {
        // console.log(123);
        sendCode(this.mobile).then(res => {
          console.log(res);
        });
        this.isyzm = false;
      } else {
        this.$toast.fail("请输入手机号码");
      }
    },
    // 验证码倒计时
    enddjs() {
      // console.log(12);
      this.isyzm = true;
      // this.time = "6000";
    }
  }
};
</script>
<style lang="less" >
</style>