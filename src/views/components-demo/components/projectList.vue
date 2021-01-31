<template>
  <div class="basicPage projectList">
     <div class="titleName">
      <div class="titleName-li">
        <el-input   class="rgIpt" placeholder="请输入内容" suffix-icon="el-icon-zoom-in">
        </el-input>
      </div>
      <div class="titleName-li">
        <i class="el-icon-edit-outline elRight"></i>编辑
      </div>
      <div class="titleName-li redDel">
        <i class="el-icon-edit-outline elRight"></i>删除
      </div>
    </div>
    <el-table class="pro_tab"
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <!-- <el-table-column type="selection" width="55"> </el-table-column> -->
     <el-table-column  prop="xm" label="项目" >
      </el-table-column>
      <el-table-column  prop="xmbh" label="项目编号" >
      </el-table-column>
       <el-table-column  prop="zqze" label="债券总额" >
      </el-table-column>
        <el-table-column  prop="zqgz" label="债券估值" >
      </el-table-column>
            <el-table-column  prop="cz" label="处置" >
      </el-table-column>
            <el-table-column  prop="cs" label="城市" >
      </el-table-column>
    </el-table>
      <pagination :tablePagination="tablePagination"></pagination>
  </div>
</template>

<script>
import pagination from "../components/pagination";
export default {
  components:{
    pagination
  },
  data() {
    return {
      tablePagination: { current: 1, size: 3, total: 3 },
      tableData: [
        {
         xm:'1',
         xmbh:'79792',
         xmmc:"上海秒一生物有限公司",
         zqze:"233443455.99",
         zqgz:"50000.32",
         cz:"50000.2",
         cs:"北京"
        },
           {
         xm:'1',
         xmbh:'79792',
         xmmc:"上海秒一生物有限公司",
         zqze:"233443455.99",
         zqgz:"50000.32",
         cz:"50000.2",
         cs:"北京"
        },
           {
         xm:'1',
         xmbh:'79792',
         xmmc:"上海秒一生物有限公司",
         zqze:"233443455.99",
         zqgz:"50000.32",
         cz:"50000.2",
         cs:"北京"
        }
        
      ],
      multipleSelection: []
    };
  },
  methods: {
    // handleSelectionChange(val) {
    //   console.log(val);
    //   this.multipleSelection = val;
    // }
  }
};
</script>

<style lang="scss">
// @import "../components-demo/components/scss/index.scss";
@import "./scss/index.scss";
.rgIpt{
.el-input__inner{
  height: 28px;
  line-height: 28px;
}
.el-input__icon{
  line-height: 30px;
}
}

</style>
