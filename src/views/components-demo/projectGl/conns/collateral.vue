<template>
  <e-point :point="point">
    <div slot="header" class="header-box">{{ headerTitle }}</div>
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
// 锚点组件
import ePoint from "@/components/AnchorPoint";

// 基本信息系
import information from "./collateralArr/information";
export default {
  props: {},
  components: {
    ePoint,
    information,
  },
  mounted() {
    this.projectId = this.$route.params.projectId;
  },
  data() {
    return {
      headerTitle: "添加项目抵押物",
      point: [
        { text: "基本信息", component: "information" },
        { text: "时效管理" },
        { text: "抵押物估值" },
        { text: "说明及文件" },
      ],
      projectId: "",
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