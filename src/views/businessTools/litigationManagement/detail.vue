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
          @unpdata="getDetail"
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
import basicPage from "./components/basicPage";
// 诉讼情况
import Litigation from "./components/Litigation";
// 文件列表组件
import fileManagement from "./components/fileManagement";
//变更日志
<<<<<<< HEAD
import changeLog from "@/views/asset-accounting/components/changeLog";

=======
import changeLog from "./components/changeLog";

import { getDetail } from "@/api/litigationManagement/index";
>>>>>>> 966421c62be5564a93fb270bb6758b66160df1be
export default {
  props: {},
  components: {
    ePoint,
    basicPage,
    Litigation,
    fileManagement,
    changeLog,
  },

  mounted() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      console.log(this.$route);
      getDetail(this.$route.query.id).then((res) => {
        this.data = res.data;
      });
    },
  },
  data() {
    return {
      data: {},
      point: [
        { text: "基本信息", component: "basicPage" },
<<<<<<< HEAD
        // { text: "估值信息", component: "valuation" },
        { text: "项目列表", component: "projectList" },
        { text: "收购方案", component: "acquisitionPlan" },

        { text: "文件管理", component: "fileManagement" },
        // { text: "工作日志", component: "workLog" },
=======
        { text: "诉讼进展", component: "Litigation" },
        { text: "诉讼文件管理", component: "fileManagement" },
>>>>>>> 966421c62be5564a93fb270bb6758b66160df1be
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