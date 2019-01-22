<template>
  <div class="find">
    <van-cell-group class="find_group">
      <van-cell title="朋友圈" is-link icon="friends" />
    </van-cell-group>
    <van-cell-group class="find_group">
      <van-cell title="扫一扫" is-link icon="friends" />
      <van-cell title="摇一摇" is-link icon="friends" />
    </van-cell-group>
    <van-cell-group class="find_group">
      <van-cell title="看一看" is-link icon="friends" />
      <van-cell title="搜一搜" is-link icon="friends" />
    </van-cell-group>
    <van-cell-group class="find_group">
      <van-cell title="附近的人" is-link icon="friends" />
      <van-cell title="漂流瓶" is-link icon="friends" />
    </van-cell-group>
    <van-cell-group class="find_group">
      <van-cell title="购物" is-link icon="friends" />
      <van-cell title="游戏" is-link icon="friends" />
    </van-cell-group>
    <van-cell-group class="find_group">
      <van-cell title="小程序" is-link icon="friends" />
    </van-cell-group>
  </div>
</template>

<style lang="less">
.find {
  background: #e5e5e5;
  height: calc(~"100% - 1.333333rem");
  overflow: scroll;
  .find_group {
    margin-top: 10px;
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
