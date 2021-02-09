<template>
  <div class="basicPage warp-form">
    <el-row :gutter="14">
      <el-col :span="10" class="box-item">
        <div class="lable">保证期间：</div>
        <div class="autoShow">根据基本信息中输入的自动显示</div>
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

    <!-- <el-row :gutter="14">
      <el-col :span="10" class="box-item">
        <div class="lable lableLheight">扣除因素_欠缴税费：</div>
        <el-input
          v-model="formData.dfOutstandingTaxes"
          placeholder="请输入"
        ></el-input>
      </el-col>
    </el-row> -->
    <el-row :gutter="14" v-for="(item, index) in zpmcOptions" :key="index">
      <el-col :span="10" class="box-item">
        <div class="lable">{{ index === 0 ? "折扣因素：" : "" }}</div>
        <el-input
          v-model="formData.name"
          placeholder="请输入折扣比例"
        ></el-input>
        <!-- <el-select
          class="selectWidth"
          v-model="formData.name"
          placeholder="请选择"
        >
          <el-option
            style="width: 100%"
            v-for="item in zpmcOptions"
            :key="item.value"
            :label="item.prop"
            :value="item.value"
          >
          </el-option>
        </el-select> -->
      </el-col>
      <el-col :offset="1" :span="11" class="box-item">
        <el-input
          v-model="formData.name"
          placeholder="请输入折扣比例"
        ></el-input>
      </el-col>
      <el-col
        v-if="index === zpmcOptions.length - 1"
        :span="2"
        style="margin-top: 10px; cursor: pointer"
      >
        <i class="el-icon-circle-plus add" @click="clickAdd">
          &nbsp;&nbsp;&nbsp;添加</i
        >
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
      valOptions: [
        {
          ys: "扣除因素_⽋缴税费",
          prop: "dfOutstandingTaxes",
        },
        {
          ys: "扣除因素_⽋缴税费",
          prop: "dfOutstandingTaxes",
        },
        {
          ys: "扣除因素_⽋缴税费",
          prop: "dfOutstandingTaxes",
        },
        {
          ys: "扣除因素_⽋缴税费",
          prop: "dfOutstandingTaxes",
        },
      ],
      zpmcOptions: [
        {
          value: "1",
          prop: "2",
          placeholder: "2",
        },
        {
          value: "1",
          prop: "2",
          placeholder: "2",
        },
      ],
    };
  },
  methods: {
    clickAdd() {
      console.log(222);
      this.zpmcOptions.push({
        value: "1",
        prop: "2",
        placeholder: "2",
      });
    },
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
    width: 150px;
    min-width: 150px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 400;
    color: #222222;
    line-height: 36px;
    text-align: right;
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