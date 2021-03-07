<template>
 <el-dialog
      class="feedback_dialog"
      title="新建服务商"
      :visible.sync="dialogVisible"
      :modal-append-to-body="false"
      append-to-body
      :before-close="shut"
      width="85%"
      top="10px"
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
  <div style="padding:0 20px 10px 0;text-align:right">
    <el-button @click="dialogVisible = false">保存草稿</el-button>
    <el-button type="primary" @click="dialogVisible = false">发起审批</el-button>
  </div>
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

//服务商权益人
import equityInvestor from "./equityInvestor";
//服务商主要管理人员
import manager from "./manager";




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

  equityInvestor,
  manager,



  },
  mounted() {
    console.log(this.$route.params.id);
  },
  data() {
    return {
      point: [
        { text: "主体成立申请表", component: "basicPage" },
        { text: "新建主体详情", component: "particulars" },
        { text: "权益人", component: "equityInvestor" },
        { text: "主要管理人员", component: "manager" },
        { text: "主体设立原因", component: "cause" }
      
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
  height: calc(100vh - 83px);
}
.feedback_dialog{
  ::v-deep .el-dialog__body{
  padding:0 20px;
  }
 
}
.feedback_dialog{
  ::v-deep .el-dialog__header{
  padding:0 20px;
  }
 
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