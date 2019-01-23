<template>
  <div class="home">
    <van-cell v-for="(item, index) in chatList" :key="index">
      <template slot="icon">
        <img class="h_img" :src="item.imgUrl">
      </template>
      <template slot="title">
        <van-row>
          <van-col span="20" class="custom-content">
            <div class="custom-text">{{ item.title }}</div>
            <div class="custom-desc">{{ item.desc }}</div>
          </van-col>
          <van-col span="4" class="time">下午2:20</van-col>
        </van-row>
      </template>
    </van-cell>
  </div>
</template>

<script>
import API_SERVER from "@/server/api/user";
export default {
  name: "home",
  components: {},
  data() {
    return {
      chatList: []
    };
  },
  mounted() {
    API_SERVER.getList().then(data => {
      this.chatList = data;
    });
  }
};
</script>

<style lang="less">
.home {
  height: calc(~"100% - 1.333333rem");
  overflow: scroll;
  .h_img {
    width: 50px;
    height: 50px;
  }
  .time {
    font-size: 12px;
  }
  .custom-content {
    padding-left: 15px;
  }
  .custom-text {
    font-weight: bold;
  }
}
</style>
