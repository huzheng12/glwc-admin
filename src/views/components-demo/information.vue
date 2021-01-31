<template>
  <e-point :point="point">
    <div class="point-content">
      <div
        class="position-relative"
        v-for="(item, index) in point"
        :key="index"
      >
        <div class="title-h3">
          <div class="infName">{{ item.text }}</div>
        </div>
        <component :is="item.component" />
      </div>
    </div>
  </e-point>
</template>

<script>
import ePoint from "@/components/AnchorPoint";
import basicPage from "./basicPage";
import workLog from "./components/workLog";
export default {
  props: {},
  components: { ePoint, basicPage, workLog },
  mounted() {
    console.log(this.$route.params.id);
  },
  data() {
    return {
      active: 0, // 当前激活的导航索引
      point: [
        { text: "基本信息", component: "basicPage" },
        { text: "尽调信息" },
        { text: "担保方式" },
        { text: "诉讼情况" },
        { text: "债券估值" },
        { text: "文件管理" },
        { text: "工作日志", component: "workLog" },
        { text: "变更日志" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.point-content {
  .title-h3 {
    display: flex;
    justify-content: space-between;
    .infName {
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 900;
      color: #222222;
    }

    .titleName {
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #2b57ff;
    }

    .elRight {
      padding-right: 5px;
    }
  }
  .position-relative {
    position: relative;
  }
}
</style>