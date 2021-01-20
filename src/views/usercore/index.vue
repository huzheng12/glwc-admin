<template>
  <div class="user">
    <div class="user-header">
      <div class="left">
        <img :src="userImg" :style="{ marginRight: '20px' }" alt="" />
        <div class="text-title">
          <p class="text1">您好！</p>
          <p>shi</p>
        </div>
      </div>
      <div class="right">
        <div class="list">
          <p class="text-color">项目数</p>
          <p>3</p>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="list">
          <p class="text-color">债权总额</p>
          <p>{{ parseInt(2000000).toLocaleString() }}</p>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="list">
          <p class="text-color">回收总额</p>
          <p>{{ parseInt(8000000).toLocaleString() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "usercore",
  data() {
    return {
      userImg: require("@/assets/img/admin.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
$color: #6b6666;
$colorMain: #000;
.user {
  padding: 50px 30px 0 40px;
}
.user-header {
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;

    .text-title {
      color: $color;
      .text1 {
        color: $colorMain;
        font-size: 20px;
        font-weight: 900;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    text-align: center;
    .el-divider--vertical {
      height: 3em;
    }
    .list {
      padding: 0 5px;
      .text-color {
        color: $color;
      }
    }
  }
}
</style>