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

    <div class="user-content">
      <div class="mian" @click="clsss">
        <div class="title-text">咨询信息</div>
      </div>
      <div class="mian">
        <div class="title-text">风控提示</div>
      </div>
      <div class="mian">
        <div class="title-text">工作日志</div>
        <div class="content">
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :icon="activity.icon"
              :type="activity.type"
              :color="activity.color"
              :size="activity.size"
              :timestamp="activity.timestamp"
            >
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
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
      activities: [
        {
          content:
            "支持使用图标支持使用图标支持使用图标支持使用图标支持使用图标支持使用图标支持使用图标支持使用图标支持使用图标支持使用图标支持使用图标支持使用图标",
          timestamp: "2018-04-12 20:46",
          // size: "large",
          icon: "el-icon-more",
          // color: "red",
        },
        {
          content: "支持自定义颜色adsjflaksjdflkajsdlkfjalsdkjflasjdf",
          timestamp: "2018-04-03 20:46",
          icon: "el-icon-more",
        },
        {
          content: "支持自定义尺寸",
          timestamp: "2018-04-03 20:46",
          // size: "large",
          icon: "el-icon-more",
        },
        {
          content: "默认样式的节点",
          timestamp: "2018-04-03 20:46",
          icon: "el-icon-more",
        },
      ],
    };
  },
  methods: {
    clsss() {
      this.$router.push("/addRole");
    },
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
.user-content {
  display: flex;
  justify-content: space-between;
  .mian {
    width: 32%;
    height: calc(100vh - 350px);
    background: #f2f2f2;
    padding: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .content {
      flex: 1;
      overflow-y: auto;
      padding: 0 5px;
    }
    .title-text {
      line-height: 44px;
      font-size: 20px;
      font-weight: 900;
      border-bottom: 1px solid #333;
      margin-bottom: 20px;
    }
  }
}
</style>