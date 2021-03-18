<template>
  <div>
    <!-- 二级路由出口 -->
    <router-view></router-view>
    
     <!-- 底部导航 -->
    <van-tabbar v-model="active" active-color="		#FF7F50">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
</style>