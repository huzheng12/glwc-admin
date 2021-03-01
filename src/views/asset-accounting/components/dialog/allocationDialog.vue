<template>
  <el-dialog
    class="valuationDialog"
    :title="titleName"
    :visible.sync="dialogVisible"
    width="60%"
  >

  <div class="titleDiv">
   <div class="left">资产包竞得价格：398203.00</div>
   <div class="right"><i class="el-icon-edit"></i>编辑</div>
  </div>

    <el-table
      :data="tableData"
      style="width: 100%;margin-top:16px;">
      <el-table-column
        prop="date"
        label="项目"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="项目名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="债券总额">
      </el-table-column>
       <el-table-column
        prop="address"
        label="债券估值_最可能">
      </el-table-column>
         <el-table-column
        prop="address"
        label="成本分摊">
      </el-table-column>
    </el-table>
 </el-dialog>
</template>

<style lang="scss" >

.valuationDialog {
  
  label{
  font-weight: 400;
  }
  .valuationForm   {
    .el-form-item__label{
  font-weight: 400!important;
  }
  .el-input {
    width: 130px;
  }
    .lxjs {
      margin-top: 12px;
    }

    .labelFont {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
    }
  }

  .titleDiv{
    display: flex;
    justify-content: space-between;
    color: #2B57FF;  
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
  }
}
</style>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      titleName: "收摊成本分摊",
       tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
      // formInline: {
      //   bjye: "",
      //   lxye: 204404.23,
      // },
    };
  },
  props: {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>