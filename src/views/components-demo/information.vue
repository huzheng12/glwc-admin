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
// 锚点组件
import ePoint from "@/components/AnchorPoint";
// 基本信息组件
import basicPage from "./basicPage";
// 工作日志组件
import workLog from "./components/workLog";
// 估值信息组件
import valuation from "./components/valuation";
// 项目列表组件
import projectList from "./components/projectList";
// 融资方式组件
import financingPlan from "./components/financingPlan";
// 文件列表组件
import fileManagement from "./components/fileManagement";
//变更日志
import changeLog from "./components/changeLog";
import { projectsprojectId } from "@/api/assetPackage/index";

export default {
  props: {},
  components: {
    ePoint,
    basicPage,
    workLog,
    valuation,
    projectList,
    financingPlan,
    fileManagement,
    changeLog
  },
  mounted() {
    console.log(this.$route.params.id);
    this.getDetail()
  },
 
  data() {
    return {
      point: [
        { text: "基本信息", component: "basicPage" },
        { text: "估值信息", component: "valuation" },
        { text: "项目列表", component: "projectList" },
        { text: "融资方案", component: "financingPlan" },
        { text: "文件管理", component: "fileManagement" },
        // { text: "工作日志", component: "workLog" },
        { text: "变更日志", component: "changeLog" },
      ],
      data:[]
    };
  },
   methods:{
     getDetail() {
      projectsprojectId(this.$route.params.id).then((res) => {
        this.data = res.data;
        console.log('详情数据',this.data)

      });
    }
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