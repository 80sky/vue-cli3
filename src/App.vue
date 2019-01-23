<template>
  <div id="app">
    <van-tabbar v-model="active" active-color="#09bb07">
      <van-tabbar-item icon="chat" :to="{ name: 'home' }">微信</van-tabbar-item>
      <van-tabbar-item icon="friends" :to="{ name: 'phone' }">通讯录</van-tabbar-item>
      <van-tabbar-item icon="eye" :to="{ name: 'find' }">发现</van-tabbar-item>
      <van-tabbar-item icon="setting-o" :to="{ name: 'my' }">我</van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="less">
html,
body,
#app {
  height: 100%;
}
</style>
