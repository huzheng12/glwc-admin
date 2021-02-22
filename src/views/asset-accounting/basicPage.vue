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
          <div class="title">资产包编号</div>
          <div class="content">{{ basicData.zcbbh }}</div>
        </div>

        <div class="center">
          <div class="title">资产包名称</div>
          <div class="content">{{ basicData.zcbmc }}</div>
        </div>

        <div class="right">
          <div class="title">资产性质</div>
          <div class="content">{{ basicData.zcxz }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">债权总额</div>
          <div class="content BTop">{{ basicData.crf }}</div>
        </div>

        <div class="center">
          <div class="title BTop">本金金额</div>
          <div class="content BTop">{{ basicData.crfjc }}</div>
        </div>

        <div class="right">
          <div class="title BTop">利息余额</div>
          <div class="content BTop">{{ basicData.cs }}</div>
        </div>
      </div>

      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">代垫费用</div>
          <div class="content BTop">{{ basicData.zqhs }}</div>
        </div>

        <div class="center">
          <div class="title BTop">债权估值</div>
          <div class="content BTop">{{ basicData.zrr }}</div>
        </div>

        <div class="right">
          <div class="title BTop">竞得价格</div>
          <div class="content BTop">{{ basicData.jzr }}</div>
        </div>
      </div>
       <div class="oneDiv">
        <div class="left">
          <div class="title BTop">基准日期</div>
          <div class="content BTop">{{ basicData.zqhs }}</div>
        </div>

        <div class="center">
          <div class="title BTop">竞得日期</div>
          <div class="content BTop">{{ basicData.zrr }}</div>
        </div>

        <div class="right">
          <div class="title BTop">交割日期</div>
          <div class="content BTop">{{ basicData.jzr }}</div>
        </div>
      </div>

         <div class="oneDiv">
        <div class="left">
          <div class="title BTop">债权户数</div>
          <div class="content BTop">{{ basicData.zqhs }}</div>
        </div>

        <div class="center">
          <div class="title BTop">债权主体</div>
          <div class="content BTop">{{ basicData.zrr }}</div>
        </div>

        <div class="right">
          <div class="title BTop">城市</div>
          <div class="content BTop">{{ basicData.cs }}</div>
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
        zcbbh: "1234567",
        zcbmc: "1234567",
        zcxz: "传统不良找券资产包",
        crf: "中国建设银行上海市分行",
        crfjc: "中国建设银行上海市分行备份",
        cs: "江苏省南京市",
        zqhs: "18324823",
        zrr: "易洋千玺",
        jzr: "2020年12月30日",
        cs:"北京"
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
@import "../components-demo/components/scss/index.scss";
</style>