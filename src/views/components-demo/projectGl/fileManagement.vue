<template>
  <div class="basicPage fileManagement">
    <div class="titleName">
      <!-- <div class="titleName-li">
        <el-input   class="rgIpt" placeholder="请输入内容" suffix-icon="el-icon-zoom-in">
        </el-input>
      </div> -->
      <div class="titleName-li">
        <!-- <i class="el-icon-top elRight"></i>上传 -->
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <i class="el-icon-top elRight"></i>上传
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">上传文件</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus"
              >上传文件夹</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="titleName-li"><i class="el-icon-bottom elRight"></i>下载</div>
    </div>

    <el-tabs type="border-card" tabPosition="left" class="customTab">
      <el-tab-pane label="用户管理">
        <el-table
          class="customTable"
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection"> </el-table-column>

          <el-table-column prop="wjbh" label="文件编号"> </el-table-column>
          <el-table-column prop="wjmc" label="文件名" show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="日期">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          wjbh: "总第20期",
          wjmc: "这是一个文件名称",
        },
        {
          date: "2016-05-03",
          wjbh: "总第20期",
          wjmc: "这是一个文件名称",
        },
        {
          date: "2016-05-03",
          wjbh: "总第20期",
          wjmc: "这是一个文件名称",
        },
      ],
      multipleSelection: [],
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../components/scss/index.scss";
.customTab {
  // min-height:400px;
  background: #f5f7fa;
  .el-tabs__nav-wrap.is-scrollable {
    padding: 0;
  }
  .el-tabs__header,
  .is-left {
    margin-right: 0 !important;
    border: none !important;
  }

  .is-scrollable {
    padding: 0 !important;
  }
  .el-tabs__nav-prev,
  .el-tabs__nav-next {
    display: none;
  }

  .customTable {
    th,
    td {
      height: 40px;
      padding: 0;
    }
    table thead tr th {
      background: none;
    }
  }
  .el-tabs__content {
    padding: 0 !important;
  }
}
</style>