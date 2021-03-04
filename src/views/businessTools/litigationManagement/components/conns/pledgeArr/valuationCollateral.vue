<template>
  <div class="basicPage warp-form">
    <el-row :gutter="14">
      <el-col :span="10" class="box-item">
        <div class="lable">责任最高限额：</div>
        <div class="autoShow">由基本信息中输入的自动显示</div>
      </el-col>
    </el-row>

    <el-row :gutter="14">
      <el-col :span="10" class="box-item">
        <div class="lable lableLheight">市场方价值_最可能：</div>
        <el-input
          v-model="formData.mostLikelyMarketValue"
          placeholder="请输入"
        ></el-input>
      </el-col>
      <el-col :span="14" class="box-item">
        <div class="lable">价值区间：</div>
        <el-input
          v-model="formData.lowestMarketValue"
          placeholder="请输入最低市场价值"
        ></el-input>
        <div class="bottomDiv"></div>
        <el-input
          v-model="formData.highestMarketValue"
          placeholder="请输入最⾼市场价值"
        ></el-input>
      </el-col>
    </el-row>

    <el-row :gutter="14">
      <el-col :span="10" class="box-item">
        <div class="lable lableLheight">扣除因素_欠缴税费：</div>
        <el-input
          v-model="formData.dfOutstandingTaxes"
          placeholder="请输入"
        ></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="14">
      <el-col :span="10" class="box-item">
        <div class="lable">折扣因素：</div>
        <el-select
          class="selectWidth"
          v-model="formData.situation"
          placeholder="请选择"
        >
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
      <el-col :offset="1" :span="11" class="box-item">
        <el-input
          v-model="formData.situation"
          placeholder="请输入折扣比例"
        ></el-input>
      </el-col>
      <el-col :span="2" style="margin-top: 10px">
        <i class="el-icon-circle-plus add"> &nbsp;&nbsp;&nbsp;添加</i>
      </el-col>
    </el-row>

    <el-row :gutter="14">
      <el-col :span="10" class="box-item">
        <div class="lable lableLheight">到手价格_最可能：</div>
        <el-input
          v-model="formData.mostLikelyValue"
          placeholder="请输入"
        ></el-input>
      </el-col>
      <el-col :span="14" class="box-item">
        <div class="lable">价值区间：</div>
        <el-input
          v-model="formData.lowestValue"
          placeholder="请输入最低到⼿价值"
        ></el-input>
        <div class="bottomDiv"></div>
        <el-input
          v-model="formData.highestValue"
          placeholder="请输入最⾼到⼿价值"
        ></el-input>
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
      input: "",
      zpmcOptions: [],
      lxOptions: [],
      qdfsOptions: [],
      dyswOptions: [],
    };
  },
};
</script>

<style lang='scss' scoped>
.warp-form {
  max-width: 760px;
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
    width: 100px;
    min-width: 100px;
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
    background: pink;
    width: 759px;
    height: 196px;
  }
}
::v-deep .el-input--medium .el-input__inner {
  height: 36px;
}
</style>