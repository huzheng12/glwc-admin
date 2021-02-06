<template>
  <div class="warp-form">
    <el-row>
      <el-col :span="24" class="box-item">
        <div class="lable">抵押物名称：</div>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="14">
      <el-col :span="10" class="box-item">
        <div class="lable">权证名称：</div>
        <el-select class="selectWidth" v-model="input" placeholder="请选择">
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
    <el-row   :gutter="14">
           <el-col :span="10" class="box-item">
        <div class="lable">类型：</div>
        <el-select class="selectWidth" v-model="input" placeholder="请选择">
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
        <el-select class="selectWidth" v-model="input" placeholder="请选择">
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

       <el-row   :gutter="14">
           <el-col :span="10" class="box-item">
        <div class="lable">责任最高限额：</div>
         <el-input v-model="input" placeholder="请输入"></el-input>
      </el-col>
           <el-col :offset="4" :span="10" class="box-item">
        <div class="lable">诉讼进展：</div>
         <el-input v-model="input" placeholder="请输入"></el-input>
      </el-col>

    </el-row>

      <el-row   :gutter="14">
           <el-col :span="10" class="box-item">
        <div class="lable">优先级：</div>
         <el-input v-model="input" placeholder="请输入"></el-input>
      </el-col>
           <el-col :offset="4" :span="10" class="box-item">
        <div class="lable">抵押顺位：</div>
        <el-select  class="selectWidth" v-model="input" placeholder="请选择">
          <el-option
            style="width: 100%"
            v-for="item in dyswOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>

    </el-row>

    <e-row :gutter="14" >
           <el-col :span="10" class="box-item">
        <div class="lable lableLheight">已成为其他债权设定抵押的金额：</div>
         <el-input class="lableLheightIpt" v-model="input" placeholder="请输入"></el-input>
      </el-col>
           <el-col :offset="4" :span="10" class="box-item">
           <div class="lable">回头年限：</div>
             <el-input v-model="input" placeholder="请输入"></el-input>
      </el-col>
    </e-row>

     <e-row :gutter="14" >
             <el-col :span="24" class="box-item">
        <div class="lable">地区：</div>
        <el-select   v-model="input" placeholder="请选择">
          <el-option
            style="width: 100%"
            v-for="item in dyswOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
           <el-select style="margin-left:25px;" v-model="input" placeholder="请选择">
          <el-option
            style="width: 100%"
            v-for="item in dyswOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
           <el-select  style="margin-left:25px;" v-model="input" placeholder="请选择">
          <el-option
            style="width: 100%"
            v-for="item in dyswOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>          
    </e-row>

     <e-row :gutter="14" >
           <el-col :span="24" class="box-item">
        <div class="lable ">地址：</div>
         <el-input  v-model="input" placeholder="请输入"></el-input>
      </el-col>
           
    </e-row>
    <el-row>


    </el-row>
    <div class="mapDiv">
      百度地图
    </div>
 

     <el-row   :gutter="14" style="margin-top:43px;">
            <el-col :span="10" class="box-item">
        <div class="lable">社区：</div>
         <el-input v-model="input" placeholder="请输入"></el-input>
      </el-col>
           <el-col :offset="4" :span="10" class="box-item">
        <div class="lable">大楼：</div>
         <el-input v-model="input" placeholder="请输入"></el-input>
      </el-col>

    </el-row>

     <el-row   :gutter="14" >
             <el-col  :span="10" class="box-item">
        <div class="lable">总层数：</div>
         <el-input v-model="input" placeholder="请输入"></el-input>
      </el-col>
           <el-col :offset="4" :span="10" class="box-item">
        <div class="lable">建设年份：</div>
         <el-input v-model="input" placeholder="请输入"></el-input>
      </el-col>

    </el-row>


     <el-row   :gutter="14" >
             <el-col :span="10" class="box-item">
        <div class="lable">所在楼层：</div>
         <el-input v-model="input" placeholder="请输入"></el-input>
      </el-col>
           <el-col :offset="4" :span="10" class="box-item">
        <div class="lable">面积：</div>
         <el-input v-model="input" placeholder="请输入"></el-input>
      </el-col>

    </el-row>

    <el-row   :gutter="14" >
            <el-col :span="10" class="box-item">
        <div class="lable">朝向：</div>
         <el-input v-model="input" placeholder="请输入"></el-input>
      </el-col>
           <el-col :offset="4" :span="10" class="box-item">
        <div class="lable">房型：</div>
         <el-input v-model="input" placeholder="请输入"></el-input>
      </el-col>

    </el-row>
    <el-row   :gutter="14" >
            <el-col :span="10" class="box-item">
        <div class="lable">建筑类型：</div>
         <el-input v-model="input" placeholder="请输入"></el-input>
      </el-col>
           <el-col :offset="4" :span="10" class="box-item">
        <div class="lable">建筑结构：</div>
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
    border: 1px solid #ccc;
    width: 759px;
    height: 196px;  

  }
}
::v-deep .el-input--medium .el-input__inner {
  height: 36px;
}
</style>