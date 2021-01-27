<template>
  <div>
    <header-box
      :searchData="searchData"
      :inputData="inputData"
      :rightBut="rightBut"
    ></header-box>
    <div class="table-content">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="日期" width="120" sortable>
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip>
        </el-table-column>
      </el-table>

      <pagination :tablePagination="tablePagination"></pagination>
    </div>
  </div>
</template>

<script>
import headerBox from "./components/header";
import pagination from "./components/pagination";
export default {
  components: {
    headerBox,
    pagination,
  },
  data() {
    return {
      tablePagination: { current: 1, size: 10, total: 10 },
      inputData: [
        {
          type: "datePicker",
          prop: "sdas",
          placeholder: "请选择日期",
          prefixIcon: "el-icon-date",
          width: "140px",
        },
        {
          type: "Input",
          prop: "input",
          placeholder: "请输入地址",
          prefixIcon: "el-icon-date",
          width: "140px",
        },
        {
          type: "Input",
          prop: "asd",
          placeholder: "请输入关键字查询",
          prefixIcon: "el-icon-date",
        },
      ],
      searchData: {
        input: "",
        sdas: "",
        asd: "",
      },
      rightBut: [
        {
          type: "1",
          text: "批量上传",
          icon: "el-icon-date",
        },
        {
          type: "2",
          text: "批量下载",
          icon: "el-icon-date",
        },
        {
          type: "2",
          text: "模板下载",
          icon: "el-icon-date",
        },
        {
          type: "2",
          text: "删除项目",
          icon: "el-icon-date",
        },
        {
          type: "2",
          text: "新建项目",
          icon: "el-icon-date",
          color: "#2B57FF",
        },
        {
          type: "2",
          text: "收藏",
          icon: "el-icon-date",
          color: "#E96722",
          vertical: true,
        },
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      multipleSelection: [],
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>

<style>
.table-content {
  padding: 0 20px;
}
</style>