<template>
  <div>
    <van-nav-bar class="index-navbar">
      <van-button slot="title" icon="search">搜索</van-button>
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab v-for="(item,index) in channels" :key="index" :title="item.name">
        <van-list v-model="loading" finished-text="没有更多了">
          <van-cell v-for="item in 20" :key="item" :title="item" />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { getAllChannels } from "@/utils/api";
import LoginVue from "../Login.vue";
export default {
  data() {
    return {
      active: 0,
      loading: "",
      channels: [] //频道
    };
  },
  async created() {
    try {
      let ret = await getAllChannels();
      this.channels = ret.data.data.channels;
      console.log(ret);
    } catch (error) {
      this.$toast.fail("获取频道数据失败");
    }
  }
};
</script>
<style lang="less">
.index-navbar {
  .van-nav-bar__title {
    width: 100%;
    background-color: #5babfb;
    border-radius: 20px;
  }
  .van-button {
    border: none;
    font-weight: normal;
    background-color: #5babfb;
    color: white;
    .van-icon {
      color: white;
    }
  }
}
</style>