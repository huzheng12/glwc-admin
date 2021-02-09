<template>
  <div class="basicPage warp-form">
    <div class="titleName">
      <div class="titleName-li"><i class="el-icon-top elRight"></i>上传</div>
    </div>

    <el-row :gutter="14">
      <el-col :span="24" class="box-item">
        <div class="lable lableLheight">抵押物情况说明：</div>
        <el-input
          v-model="formData.situationComment"
          type="textarea"
          :rows="4"
          placeholder="请输入情况说明"
          maxlength="200"
          show-word-limit
        ></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="14">
      <el-col :span="24" class="box-item">
        <div class="lable lableLheight">抵押物估值说明：</div>
        <el-input
          v-model="formData.valuationComment"
          type="textarea"
          :rows="4"
          placeholder="请输入情况说明"
          maxlength="200"
          show-word-limit
        ></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button @click="submit" style="float: right" type="primary"
          >确定</el-button
        >
        <el-button @click="tabBack" style="float: right; margin-right: 10px"
          >取消</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    formData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      projectId: this.$route.params.projectId,
    };
  },
  methods: {
    submit() {
      this.$emit("submit");
    },
    tabBack() {
      this.$router.push(
        `/beforeInvestment/markdown/essential/${this.projectId}/0`
      );
    },
  },
};
</script>

<style lang="scss" scoped>
// @import "./scss/index.scss";
@import "../../scss/index.scss";
.warp-form {
  max-width: 760px;
  position: relative;

  .add {
    color: #2b57ff;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
  }
  .box-item {
    display: flex;
    margin-bottom: 16px;
    .autoShow {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #222222;
      line-height: 36px;
    }

    .bottomDiv {
      // box-sizing: border-box;
      // padding: 0 20px;
      width: 30px;
      height: 1px;
      background: #979797;
      line-height: 40px;
      margin-top: 16px;
      margin-left: 10px;
      margin-right: 10px;
    }

    .selectWidth {
      width: 210px;
    }
  }
  .lable {
    width: 150px;
    min-width: 150px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 400;
    color: #222222;
    line-height: 36px;
    text-align: right;
  }
  .lableLheight {
    line-height: 19px;
    // font-size: 12px!important;
  }

  .lableLheightIpt {
    width: 210px;
  }
  .value {
    width: 100%;
    background: red;
  }

  .mapDiv {
    border: 1px solid #ccc;
    width: 759px;
    height: 196px;
  }
}
::v-deep .el-input--medium .el-input__inner {
  height: 36px;
}
</style>
