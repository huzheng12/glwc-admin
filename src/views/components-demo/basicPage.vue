<template>
  <div class="basicPage">
    <div class="titleName">
      <div class="titleName-li" @click="projectss">
        <i class="el-icon-edit-outline elRight"></i>编辑
      </div>
      <!-- <div class="titleName-li">
        <i class="el-icon-edit-outline elRight"></i>编辑
      </div> -->
    </div>
    <div class="basicPage_header">
      <div class="oneDiv">
        <div class="left">
          <div class="title">资产包编号</div>
          <div class="content">1234567</div>
        </div>

        <div class="center">
          <div class="title">资产包名称</div>
          <div class="content">1234567</div>
        </div>

        <div class="right">
          <div class="title">资产性质</div>
          <div class="content">传统不良找券产包</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">出让方</div>
          <div class="content BTop">1234567</div>
        </div>

        <div class="center">
          <div class="title BTop">出让方简称</div>
          <div class="content BTop">1234567</div>
        </div>

        <div class="right">
          <div class="title BTop">城市</div>
          <div class="content BTop">传统不良找券产包</div>
        </div>
      </div>

      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">债权户数</div>
          <div class="content BTop">1234567</div>
        </div>

        <div class="center">
          <div class="title BTop">责任人</div>
          <div class="content BTop">1234567</div>
        </div>

        <div class="right">
          <div class="title BTop">基准数</div>
          <div class="content BTop">传统不良找券产包</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { projects } from "@/api/projectManagement/index";
export default {
  methods: {
    projectss() {
      projects();
    },
  },
};
</script>

<style  lang="scss" scoped>
@import "../components-demo/components/scss/index.scss";
</style>