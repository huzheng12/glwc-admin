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
// 工商信息
import IndustryMsg from "./IndustryMsg";

//服务商权益人
import equityInvestor from "./equityInvestor";
//服务商主要管理人员
import manager from "./manager";
// 司法信息
import operational from "./operational";
//服务商关联的项目
import relevance from "./relevance";
//持有资产包
import assetPackage from "./assetPackage";
//资金往来
import capitalTransaction from "./capitalTransaction";
//授权管理
import Authorization from "./Authorization";
//公章管理
import cachet from "./cachet";
//营业执照管理
import license from "./license";





// 文件列表组件
import fileManagement from "./fileManagement";



export default {
  props: {
   
  },
  components: {
      ePoint,
      IndustryMsg,
assetPackage,
capitalTransaction,
Authorization,
cachet,
license,
  equityInvestor,
  manager,
  operational,
  relevance,

 
    fileManagement,

  },
  mounted() {
    console.log(this.$route.params.id);
  },
  data() {
    return {
      point: [
   
        { text: "工商信息", component: "IndustryMsg" },
        { text: "权益人", component: "equityInvestor" },
        { text: "主要管理人员", component: "manager" },
        { text: "司法信息", component: "operational" },
        { text: "持有资产包", component: "assetPackage" },
        { text: "资金往来", component: "capitalTransaction" },
         { text: "授权管理", component: "Authorization" },
        { text: "公章管理", component: "cachet" },
        { text: "营业执照管理", component: "license" },
  
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