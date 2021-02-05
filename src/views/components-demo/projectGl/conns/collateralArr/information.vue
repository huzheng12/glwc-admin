<template>
  <div class="warp-form">
    <el-row :gutter="20">
      <el-col :span="24" class="box-item">
        <div class="lable">抵押物名称：</div>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="14">
      <el-col :span="10" class="box-item">
        <div class="lable">权证名称：</div>
        <el-select v-model="input" placeholder="请选择">
          <el-option
            style="width: 100%"
            v-for="item in zpmcOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="14" class="box-item">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="14">
      <el-col :span="24" class="box-item">
        <div class="lable">所有人：</div>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      zpmcOptions: [],
    };
  },
};
</script>

<style lang='scss' scoped>
.warp-form {
  max-width: 760px;
  .box-item {
    display: flex;
    margin-bottom: 16px;
  }
  .lable {
    width: 100px;
    min-width: 100px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #222222;
    line-height: 36px;
    text-align: right;
  }
  .value {
    width: 100%;
    background: red;
  }
}
::v-deep .el-input--medium .el-input__inner {
  height: 36px;
}
</style>