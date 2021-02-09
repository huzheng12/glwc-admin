<template>
  <div class="warp-form">
    <el-row>
      <el-col :span="24" class="box-item">
        <div class="lable">质押物名称：</div>
        <el-input v-model="formData.name" placeholder="请输入内容"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="14">
      <el-col :span="10" class="box-item">
        <div class="lable">权证名称：</div>
        <el-select
          class="selectWidth"
          v-model="formData.warrantSituation"
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
      <el-col :span="14" class="box-item">
        <el-input
          v-model="formData.licenseNumber"
          placeholder="请输入内容"
        ></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="14">
      <el-col :span="24" class="box-item">
        <div class="lable">所有人：</div>
        <el-input v-model="formData.owner" placeholder="请输入内容"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="14">
      <el-col :span="10" class="box-item">
        <div class="lable">类型：</div>
        <el-select
          class="selectWidth"
          v-model="formData.type"
          placeholder="请选择"
        >
          <el-option
            style="width: 100%"
            v-for="item in lxOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :offset="4" :span="10" class="box-item">
        <div class="lable">取得方式：</div>
        <el-select
          class="selectWidth"
          v-model="formData.obtainWay"
          placeholder="请选择"
        >
          <el-option
            style="width: 100%"
            v-for="item in qdfsOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
    </el-row>

    <!--
      暂未定义
      
       <el-row :gutter="14">
      <el-col :span="10" class="box-item">
        <div class="lable">数量：</div>
       
        <el-input v-model="formData.name" placeholder="请输入"></el-input>
      </el-col>
      <el-col :offset="4" :span="10" class="box-item">
        <div class="lable">回收年限：</div>
        <el-input v-model="formData.recyclePeriod" placeholder="请输入"></el-input>
      </el-col>
    </el-row> -->

    <el-row :gutter="14">
      <el-col :span="10" class="box-item">
        <div class="lable">责任最高限额：</div>
        <el-input v-model="formData.quota" placeholder="请输入"></el-input>
      </el-col>
      <el-col :offset="4" :span="10" class="box-item">
        <div class="lable">诉讼进展：</div>
        <el-input
          v-model="formData.lawsuitProgress"
          placeholder="请输入"
        ></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="14">
      <el-col :span="10" class="box-item">
        <div class="lable">优先级：</div>
        <el-input v-model="formData.priority" placeholder="请输入"></el-input>
      </el-col>
      <el-col :offset="4" :span="10" class="box-item">
        <div class="lable">质押情况：</div>
        <el-select
          class="selectWidth"
          v-model="formData.situation"
          placeholder="请选择"
        >
          <el-option
            style="width: 100%"
            v-for="item in qdfsOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
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

<style lang="scss" scoped>
.warp-form {
  max-width: 760px;
  .box-item {
    display: flex;
    margin-bottom: 16px;

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
    border: 1px solid #ccc;
    width: 759px;
    height: 196px;
  }
}
::v-deep .el-input--medium .el-input__inner {
  height: 36px;
}
</style>
