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
// // 基本信息组件
import basicPage from "./assembly/basicPage";
// 信贷信息
import credit from "./assembly/credit";
// // 担保方式
import guarantee from "./assembly/guarantee";
// // 财产线索
import Litigation from "./assembly/Litigation";
// 谈判情况
import Negotiations from "./assembly/Negotiations";
// 诉讼情况
import litigationlist from "./assembly/litigationlist";
// 估值信息
import valuation from "./assembly/valuation";
// 处置管理
import management from "./assembly/management";
// 现金回收
import recovery from "./assembly/cash-recovery";
// 以物抵债
import property from "./assembly/property";
// 已发生费用
import incurred from "./assembly/incurred";
// 项目文件管理
import fileManagement from "./assembly/fileManagement";
// 工作日志
import workLog from "./assembly/workLog";

import { projectsprojectId } from "@/api/projectManagement/index";
export default {
  props: {},
  components: {
    ePoint,
    basicPage,
    credit,
    guarantee,
    Negotiations,
    Litigation,
    litigationlist,
    valuation,
    management,
    recovery,
    property,
    incurred,
    fileManagement,
    workLog,
    changeLog: () => import("./assembly/changeLog"),
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
        { text: "信贷信息", component: "credit" },
        { text: "担保方式", component: "guarantee" },
        { text: "财产线索", component: "Litigation" },
        { text: "谈判情况", component: "Negotiations" },
        { text: "诉讼情况", component: "litigationlist" },
        { text: "估值信息", component: "valuation" },
        { text: "处置管理", component: "management" },
        { text: "现金回收", component: "recovery" },
        { text: "以物抵债", component: "property" },
        { text: "已发生费用", component: "incurred" },
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