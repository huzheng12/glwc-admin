<template>
  <div class="basicPage">
    <el-table :data="tableData" style="width: 100%; border: 1px solid #e7eaeb">
      <el-table-column prop="name" label="编号" width="180"> </el-table-column>
      <el-table-column prop="executionStatus" label="时间">
      </el-table-column>
      <el-table-column prop="executionStatus" label="收款方式"> </el-table-column>
      <el-table-column prop="executionStatus" label="用途">
      </el-table-column>
      <el-table-column prop="executionStatus" label="金额">
      </el-table-column>
      <el-table-column prop="executionStatus" label="说明">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {
  projectslawsuitslist,
  delprojectslawsuits,
} from "@/api/projectManagement/index";
export default {
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      projectId: this.$route.params.id || "",
    };
  },
  mounted() {
    this.listPro();
  },
  methods: {
    listPro() {
      //获取数据列表
      if (this.projectId) {
        projectslawsuitslist(this.projectId).then((res) => {
          if (res.code === 0) {
            this.tableData = res.data;
          }
        });
      }
    },
    addPro() {
      // 新增数据列表
      this.$router.push(
        `/beforeInvestment/markdown/essential/${this.projectId}/lawsuits/new`
      );
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    updataPro() {
      // 编辑担保人
      if (this.multipleSelection.length === 1) {
        sessionStorage.setItem(
          "data",
          JSON.stringify(this.multipleSelection[0])
        );
        //通过key来获取value
        // var dt = sessionStorage.getItem("data");
        this.$router.push(
          `/beforeInvestment/markdown/essential/${this.projectId}/lawsuits/${this.multipleSelection[0].id}`
        );
      } else {
        this.$message({
          message: "请选择一条数据",
          type: "warning",
        });
      }
    },
    delPro() {
      // 删除数据

      if (this.multipleSelection.length === 1) {
        this.$confirm(
          `是否删除 ${this.multipleSelection[0].name}`,
          "确认信息",
          {
            distinguishCancelAndClose: true,
            confirmButtonText: "确定",
            cancelButtonText: "取消",
          }
        ).then(() => {
          delprojectslawsuits(
            this.projectId,
            this.multipleSelection[0].id
          ).then((res) => {
            if (res.code === 0) {
              this.$message({
                message: "删除成功",
                type: "success",
              });
              this.listPro();
            }
          });
        });
      } else {
        this.$message({
          message: "请选择一条数据",
          type: "warning",
        });
      }
    },
  },
};
</script>

<style  lang="scss" scoped >
@import "../../components-demo/components/scss/index.scss";
</style>