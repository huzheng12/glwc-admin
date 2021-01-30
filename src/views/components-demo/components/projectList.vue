<template>
  <div class="projectList">
    <div class="titleName">

      <div class="titleName-li">
          <el-input
          class="rgIpt"
          size="small"
          placeholder="请输入内容"
          suffix-icon="el-icon-zoom-in"
        >
        </el-input>
        <div class="delete"><i class="el-icon-edit-outline "></i><div class="deleTx">删除</div></div>
        <div class="editor"><i class="el-icon-edit-outline "></i><div class="editTx">编辑</div></div>
        
      </div>
    </div>
    <el-table class="pro_tab"
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column fixed prop="zcbbh" label="资产包编号" width="120">
        <template slot-scope="scope">
          <i class="el-icon-star-off"></i>
          &nbsp;&nbsp;{{ scope.row.zcbbh }}
        </template>
      </el-table-column>
      <el-table-column fixed prop="zcbmc" label="资产包名称" width="120">
      </el-table-column>
      <el-table-column fixed label="操作" width="120">
        <template slot-scope="scope">
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ scope.row.value
              }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="toInformation(scope.row.id)"
                >基本信息</el-dropdown-item
              >
              <el-dropdown-item>估值信息</el-dropdown-item>
              <el-dropdown-item>所属项目</el-dropdown-item>
              <el-dropdown-item>融资方案</el-dropdown-item>
              <el-dropdown-item>文件管理</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
      <el-table-column fixed label="文档" width="120">
        <template slot-scope="scope">
          <el-link type="primary">{{ scope.row.wd }}</el-link>
        </template>
      </el-table-column>
      <el-table-column label="持有主体" width="120">
        <template slot-scope="scope">
          <span class="span_bottom">{{ scope.row.cyzt }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="syqzt" label="收益权主体" width="120">
        <template slot-scope="scope">
          <span class="span_bottom">{{ scope.row.syqzt }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="crfjc" label="出让方简称" width="120">
        <template slot-scope="scope">
          <span class="span_bottom">{{ scope.row.crfjc }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="cs" label="城市" width="120"> </el-table-column>
      <el-table-column prop="zqze" sortable label="债权总额" width="140">
      </el-table-column>
      <el-table-column prop="gzzkn" sortable label="估值_最可能" width="140">
      </el-table-column>
      <el-table-column prop="zqhs" label="债券户数" width="120">
      </el-table-column>
      <el-table-column prop="rzcb" label="融资成本" width="120">
      </el-table-column>
      <el-table-column prop="ztzsyl" label="再投资收益率" width="120">
      </el-table-column>
      <el-table-column prop="zrr" label="责任人" width="120"> </el-table-column>
      <el-table-column prop="gxsj" label="更新时间" width="120">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          type: null,
          zcbbh: "b201910101",
          zcbmc: "资产包管理一号",
          cz: "编辑",
          wd: "明细",
          mx: "明细",
          cyzt: "c1",
          syqzt: "L1",
          crfjc: "东方上海",
          cs: "上海",
          zqze: "639580",
          gzzkn: "49736.78",
          zqhs: "5",
          rzcb: "6.00%",
          ztzsyl: "35.00%",
          zrr: "张三",
          gxsj: "2019/01/10",
          options: [
            {
              value: "选项1",
              label: "黄金糕"
            },
            {
              value: "选项2",
              label: "双皮奶"
            },
            {
              value: "选项3",
              label: "蚵仔煎"
            },
            {
              value: "选项4",
              label: "龙须面"
            },
            {
              value: "选项5",
              label: "北京烤鸭"
            }
          ],
          value: "编辑"
        },
        {
          id: 2,
          type: null,
          zcbbh: "b201910101",
          zcbmc: "资产包管理一号",
          cz: "编辑",
          wd: "明细",
          mx: "明细",
          cyzt: "c1",
          syqzt: "L1",
          crfjc: "东方上海",
          cs: "北京",
          zqze: "1180",
          gzzkn: "59736.78",
          zqhs: "5",
          rzcb: "6.00%",
          ztzsyl: "35.00%",
          zrr: "张三",
          gxsj: "2019/01/10",
          options: [
            {
              value: "选项1",
              label: "黄金糕"
            },
            {
              value: "选项2",
              label: "双皮奶"
            },
            {
              value: "选项3",
              label: "蚵仔煎"
            },
            {
              value: "选项4",
              label: "龙须面"
            },
            {
              value: "选项5",
              label: "北京烤鸭"
            }
          ],
          value: "编辑"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection = val;
    }
  }
};
</script>

<style lang="scss">
.projectList {
  position: relative;
  .titleName {
    position: absolute;
    top: -27px;
    right: 0;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #2b57ff;
    cursor: pointer;
    .titleName-li {
        display: flex;
        align-content: center;
      margin-left: 13px;
        .rgIpt{
            width: 151px;
            height: 28px;   
        }
      .delete{
          width: 50px;
         
          display: flex;
          align-content: center;
          .deleTx{ 
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #2B57FF;
          }
      }
      .editor{
          display: flex;

          align-content: center;
        //   justify-content: bottom;
            .editTx{ 
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #2B57FF;
          }
      }
    }
    .elRight {
      padding-right: 5px;
    }
  }
//   .pro_tab{
//       padding-top: 50px;
//   }
}
// @import "./scss/index.scss";
</style>
