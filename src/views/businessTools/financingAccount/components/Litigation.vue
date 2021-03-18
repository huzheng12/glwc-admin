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
      <el-table-column prop="requiredPayBackDate" label="应还⽇期"> </el-table-column>
      <el-table-column prop="payBackDate" label="还款⽇期">
      </el-table-column>
      <el-table-column prop="requiredPrincipleBalance" label="本⾦应还额"> </el-table-column>
      <el-table-column prop="requiredInterestBalance" label="利息应还额"> </el-table-column>
      <!-- <el-table-column prop="subjectChanged" label="法院">
        <template slot-scope="scope">
          {{ scope.row.subjectChanged ? "是" : "否" }}
        </template>
      </el-table-column> -->
      <el-table-column prop="requiredPenaltyBalance" label="罚息应还额"> </el-table-column>
      <el-table-column prop="requiredFeeBalance" label="管理费应还额"></el-table-column>
      <el-table-column prop="payBackBalance" label="还款⾦额"></el-table-column>
      <el-table-column prop="requiredFeeBalance" label="还款资⾦来源"></el-table-column>
      <el-table-column prop="principleBalance" label="融资本⾦余额"></el-table-column>
      <el-table-column prop="createdAt" label="创建时间"></el-table-column>
      <el-table-column prop="updatedAt" label="更新时间">
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
import { add, getList, update, del } from "@/api/financingAccount/repayments";
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
            prop: "requiredPayBackDate",
            label: "应还⽇期",
            type: "Picker"
          },
          right: {
            prop: "payBackDate",
            label: "还款⽇期",
            type: "Picker"
          },
        },
        {
          left: {
            prop: "requiredPrincipleBalance",
            label: "本⾦应还额",
          },
          right: {
            prop: "requiredInterestBalance",
            label: "利息应还额",
            type: "Picker",
          },
        },
        {
          left: {
            prop: "requiredPenaltyBalance",
            label: "罚息应还额",
          },
          right: {
            prop: "requiredFeeBalance",
            label: "管理费应还额",
          },
        },
        {
          left: {
            prop: "payBackBalance",
            label: "还款⾦额",
          },
          right: {
            prop: "fundSource",
            label: "还款资⾦来源",
          },
        },
         {
          left: {
            prop: "principleBalance",
            label: "融资本⾦余额",
          },
          right: null,
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
          del(this.multipleSelection[0].id,this.projectId).then((res) => {
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