<template>
  <div class="basicPage">
    <div class="titleName">
      <div class="titleName-li">
        <i class="el-icon-edit-outline elRight"></i>上传
      </div>

      <div class="titleName-li" @click="addPro">
        <i class="el-icon-edit-outline elRight"></i>添加
      </div>
      <div class="titleName-li" @click="updataPro">
        <i class="el-icon-edit-outline elRight"></i>编辑
      </div>
      <div class="titleName-li redDel" @click="delPro">
        <i class="el-icon-edit-outline elRight"></i>删除
      </div>
    </div>

    <el-table
      @selection-change="handleSelectionChange"
      :data="tableData"
      style="width: 100%; border: 1px solid #e7eaeb"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="name" label="时间" width="180"> </el-table-column>
      <el-table-column prop="executionStatus" label="案件说明">
      </el-table-column>
      <el-table-column prop="lawsuitAging" label="文件编号"> </el-table-column>
      <el-table-column prop="docName" label="文件名称"> </el-table-column>
      <!-- <el-table-column prop="subjectChanged" label="法院">
        <template slot-scope="scope">
          {{ scope.row.subjectChanged ? "是" : "否" }}
        </template>
      </el-table-column> -->
      <el-table-column prop="serviceProviderId" label="法院"> </el-table-column>
      <el-table-column prop="serviceProviderId" label="服务商">
      </el-table-column>
    </el-table>
    <dialog-vis
      :dataObj="data"
      :rowData="rowData"
      title="修改基本信息"
      ref="dialog"
      labelWidth="120px"
      @submit="submit"
    ></dialog-vis>
  </div>
</template>

<script>
import dialogVis from "@/components/dialogVis";
import { add, getList, update, del } from "@/api/litigationManagement/progress";
export default {
  components: { dialogVis },
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      projectId: this.$route.query.id || "",
      data: {},
      rowData: [
        {
          left: {
            prop: "stage",
            label: "诉讼阶段",
          },
          right: {
            prop: "duration",
            label: "阶段时效",
          },
        },
        {
          left: {
            prop: "durationUnit",
            label: "阶段时效单位(天/⽉/年)",
          },
          right: {
            prop: "stageDate",
            label: "阶段时间",
            type: "Picker",
          },
        },
        {
          left: {
            prop: "content",
            label: "诉讼内容",
          },
          right: {
            prop: "docName",
            label: "⽂书名称",
          },
        },
      ],
      projectData: {},
      isAdd: true,
    };
  },
  mounted() {
    this.listPro();
  },
  methods: {
    listPro() {
      //获取数据列表
      if (this.projectId) {
        getList(this.projectId).then((res) => {
          if (res.code === 0) {
            this.tableData = res.data;
          }
        });
      }
    },
    addPro() {
      this.isAdd = true;
      this.$refs.dialog.visible = true;
      this.data = JSON.parse(JSON.stringify(this.projectData));
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
        for (let index = 0; index < this.tableData.length; index++) {
          const element = this.tableData[index];
          if (element.id == this.multipleSelection[0].id) {
            this.projectData = element;
          }
          
        }
        this.isAdd = false;
        this.$refs.dialog.visible = true;
        this.data = JSON.parse(JSON.stringify(this.projectData));
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
          `是否确定删除`,
          "确认信息",
          {
            distinguishCancelAndClose: true,
            confirmButtonText: "确定",
            cancelButtonText: "取消",
          }
        ).then(() => {
          del(this.projectId, this.multipleSelection[0].id).then((res) => {
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
    submit() {
      if (this.isAdd) {
        add(this.projectId, this.data).then((res) => {
          if (res.code === 0) {
            this.$refs.dialog.visible = false;
            this.$emit("unpdata");
            this.$message({
              message: "添加成功",
              type: "success",
            });
            this.listPro();
          }
        });
        return;
      }
      update(this.projectId, this.projectData.id, this.data).then((res) => {
        if (res.code === 0) {
          this.$refs.dialog.visible = false;
          this.$emit("unpdata");
          this.$message({
            message: "修改成功",
            type: "success",
          });
          this.listPro();
        }
      });
    },
  },
};
</script>

<style  lang="scss" scoped >
@import "../components/scss/index.scss";
</style>