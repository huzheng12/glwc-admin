<template>
  <div class="basicPage">
    <div class="titleName">
      <div class="titleName-li" @click="projectss">
        <i class="el-icon-edit-outline elRight"></i>编辑
      </div>
    </div>

    <div class="basicPage_header">
      <div class="oneDiv">
        <div class="left">
          <div class="title">申请日期</div>
          <div class="content">{{ basicData.sqrq }}</div>
        </div>

        <div class="center">
          <div class="title">主体成立编号</div>
          <div class="content">{{ basicData.ztclbh }}</div>
        </div>

     
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">申请单位</div>
          <div class="content BTop">{{ basicData.sqdw }}</div>
        </div>

       
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">申请单位意见</div>
          <div class="content BTop">{{ basicData.dwyj }}</div>
        </div>

       
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">总裁意见(如需)</div>
          <div class="content BTop">{{ basicData.zcyj }}</div>
        </div>

       
      </div>

     


    </div>
  </div>
</template>

<script>
import { projects } from "@/api/projectManagement/index";
export default {
  data() {
    return {
      basicData: {
        sqrq: "1234567",
        ztclbh: "1234567",
        sqdw: "传统不良找券资产包",
        dwyj: "中国建设银行上海市分行",
        zcyj: "中国建设银行上海市分行备份",
      },
    };
  },
  methods: {
    projectss() {
      projects({
        packageId: "1",
        mode: "simple",
      });
    },
  },
};
</script>

<style  lang="scss" scoped>
@import "@/views/components-demo/components/scss/index.scss";
</style>