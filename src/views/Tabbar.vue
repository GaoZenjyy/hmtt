<template>
  <div>
    <!-- 子页面 -->
    <router-view></router-view>
    <!-- 导航 -->
    <van-tabbar route>
      <van-tabbar-item to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/wenda" icon="notes-o">问答</van-tabbar-item>
      <van-tabbar-item to="/video" icon="play-circle-o">视频</van-tabbar-item>
      <van-tabbar-item to="/my" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>