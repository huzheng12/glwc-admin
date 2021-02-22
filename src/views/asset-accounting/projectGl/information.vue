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
        <component
          :projectData="data"
          @unpdata="projectsprojectId"
          :is="item.component"
        />
      </div>
    </div>
  </e-point>
</template>

<script>
// 锚点组件
import ePoint from "@/components/AnchorPoint";
// 基本信息组件
import basicPage from "./basicPage";
// 尽调信息
import diligence from "./diligence";
// // 担保方式
import guarantee from "./guarantee";
// 诉讼情况
import Litigation from "./Litigation";
// 估值信息组件
import valuation from "./valuation";
// // 融资方式组件
// import financingPlan from "./components/financingPlan";
// 文件列表组件
import fileManagement from "./fileManagement";
//日志
import workLog from "./workLog";
//变更日志
import changeLog from "./changeLog";

import { projectsprojectId } from "@/api/projectManagement/index";
export default {
  props: {},
  components: {
    ePoint,
    basicPage,
    diligence,
    guarantee,
    valuation,
    Litigation,
    fileManagement,
    workLog,
    changeLog,
  },

  mounted() {
    this.projectsprojectId();
  },
  methods: {
    projectsprojectId() {
      projectsprojectId(this.$route.params.id).then((res) => {
        this.data = res.data;
      });
    },
  },
  data() {
    return {
      data: {},
      point: [
        { text: "基本信息", component: "basicPage" },
        { text: "尽调信息", component: "diligence" },
        { text: "担保方式", component: "guarantee" },
        { text: "诉讼情况", component: "Litigation" },
        { text: "债券估值", component: "valuation" },
        { text: "项目文件管理", component: "fileManagement" },
        { text: "工作日志", component: "workLog" },
        { text: "变更日志", component: "changeLog" },
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