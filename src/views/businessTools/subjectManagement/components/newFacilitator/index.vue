<template>
 <el-dialog
      class="feedback_dialog"
      title="新建服务商"
      :visible.sync="dialogVisible"
      :modal-append-to-body="false"
      append-to-body
      :before-close="shut"
      width="85%"
      top="5px"
    >
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
 </el-dialog>
</template>

<script>
// 锚点组件
import ePoint from "@/components/AnchorPoint";
// 服务商引入申请表
import basicPage from "./basicPage";
// 新建服务商详情
import particulars from "./particulars";
//服务商引入原因
import cause from "./cause";
// 工商信息
import IndustryMsg from "./IndustryMsg";
//服务商权益人
import equityInvestor from "./equityInvestor";
//服务商主要管理人员
import manager from "./manager";
// 司法信息
import operational from "./operational";



// 文件列表组件
import fileManagement from "./fileManagement";



export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    }
  },
  components: {
    ePoint,
    basicPage,
    particulars,
  cause,
  IndustryMsg,
  equityInvestor,
  manager,
  operational,

    fileManagement,

  },
  mounted() {
    console.log(this.$route.params.id);
  },
  data() {
    return {
      point: [
        { text: "服务商引入申请表", component: "basicPage" },
        { text: "新建服务商详情", component: "particulars" },
        { text: "服务商引入原因", component: "cause" },
        { text: "工商信息", component: "IndustryMsg" },
        { text: "服务商权益人", component: "equityInvestor" },
        { text: "服务商主要管理人员", component: "manager" },
        { text: "司法信息", component: "operational" },
  
        { text: "文件管理", component: "fileManagement" },
      
      ],
    };
  },
  methods: {
    shut() {
      this.$emit("shutDialog");
    },
  },
};
</script>

<style lang="scss" scoped >
.warp{
  height: calc(100vh - 120px);
}
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