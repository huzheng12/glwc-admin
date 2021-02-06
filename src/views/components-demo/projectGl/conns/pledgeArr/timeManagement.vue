<template>
  <div class="warp-form">
     
      <el-row   :gutter="14">
           <el-col :span="10" class="box-item">
        <div class="lable">保证期间：</div>
         <el-input v-model="input" placeholder="请输入"></el-input>
      </el-col>
           <el-col :offset="4" :span="10" class="box-item">
        <div class="lable">诉讼时效：</div>
         <el-input v-model="input" placeholder="请输入"></el-input>
      </el-col>

    </el-row>

     <el-row   :gutter="14">
           <el-col :span="10" class="box-item">
        <div class="lable">申请执行期间：</div>
         <el-input v-model="input" placeholder="请输入"></el-input>
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
      lxOptions:[],
      qdfsOptions:[],
      dyswOptions:[]
      
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

    .selectWidth{
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
  .lableLheight{
    line-height: 19px;
    // font-size: 12px!important;
    

  }

  .lableLheightIpt{
    width: 210px;
  }
  .value {
    width: 100%;
    background: red;
  }

  .mapDiv{
    background: pink;
    width: 759px;
    height: 196px;  

  }
}
::v-deep .el-input--medium .el-input__inner {
  height: 36px;
}
</style>