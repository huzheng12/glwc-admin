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
      <el-table-column prop="name" label="诉讼事项" width="180">
      </el-table-column>
      <el-table-column prop="executionStatus" sortable label="执行情况">
      </el-table-column>
      <el-table-column prop="lawsuitAging" sortable label="诉讼时效">
      </el-table-column>
      <el-table-column prop="court" sortable label="管辖法院">
      </el-table-column>
      <el-table-column prop="subjectChanged" label="是否变更执行主体">
      </el-table-column>
      <el-table-column prop="serviceProviderName" label="服务商">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { projectslawsuits } from "@/api/projectManagement/index";
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
      tableData: [],
    };
  },
  mounted() {
    this.projectslawsuits();
  },
  methods: {
    projectslawsuits() {
      if (this.$route.params.id.split("&&")[0]) {
        projectslawsuits(this.$route.params.id.split("&&")[0]).then((res) => {
          if (res.code === 0) {
            this.tableData = res.data;
          }
        });
      }
    },
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