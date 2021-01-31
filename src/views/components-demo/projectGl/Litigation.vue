<template>
  <div class="basicPage">
    <div class="titleName">
      <div class="titleName-li">
        <i class="el-icon-edit-outline elRight"></i>上传
      </div>
      <div class="titleName-li">
        <i class="el-icon-edit-outline elRight"></i>编辑
      </div>
    </div>

    <el-table :data="tableData" style="width: 100%; border: 1px solid #e7eaeb">
      <el-table-column prop="date" label="诉讼事项" width="180">
      </el-table-column>
      <el-table-column prop="name" sortable label="执行情况"> </el-table-column>
      <el-table-column prop="address" sortable label="诉讼时效">
      </el-table-column>
      <el-table-column prop="address" sortable label="管辖法院">
      </el-table-column>
      <el-table-column prop="address" label="是否变更执行主体">
      </el-table-column>
      <el-table-column prop="address" label="服务商"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabsActive: 0,
      tabHeader: [
        {
          title: "全部",
        },
        {
          title: "保证人",
        },
        {
          title: "抵押物",
        },
        {
          title: "质押物",
        },
        {
          title: "其他保证",
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    clickActive(i) {
      console.log(i);
      this.tabsActive = i;
    },
  },
};
</script>

<style  lang="scss" scoped >
@import "../components/scss/index.scss";
</style>