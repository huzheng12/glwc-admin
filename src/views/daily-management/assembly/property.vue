<template>
  <div class="basicPage">
    <!-- <div class="titleName">
      <div class="titleName-li">
        <i class="el-icon-edit-outline elRight"></i>上传
      </div>
      <div class="titleName-li">
        <i class="el-icon-edit-outline elRight"></i>编辑
      </div>
    </div> -->
    <div class="basicPage_header">
      <div class="oneDiv">
        <div class="left">
          <div class="title">资产名称</div>
          <div class="content"></div>
        </div>

        <div class="center">
          <div class="title">处置类型</div>
          <div class="content"></div>
        </div>

        <div class="right">
          <div class="title">回收金额汇总</div>
          <div class="content"></div>
        </div>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projectData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style  lang="scss" scoped>
@import "../../components-demo/components/scss/index.scss";
</style>