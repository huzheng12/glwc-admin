<template>
  <el-dialog
    class="valuationDialog"
    :title="titleName"
    :visible.sync="dialogVisible"
    width="60%"
  >
    <el-form
      :inline="true"
      label-width="140px"
      :model="data"
      class="valuationForm"
    >
      <el-row>
        <el-col :span="8">
          <el-form-item label="本金金额：">
            <el-input
              v-model="data.principalBalance"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="利息余额：">
            <el-input
              v-model="data.interestBalance"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8" style="margin-top: 12px"
          ><i class="el-icon-tickets" style="margin-right: 6px"></i
          >利息计算</el-col
        >
      </el-row>

      <el-row>
        <el-form-item label="SAE报告类型：">
          <!-- <el-input v-model="data.bjye" readonly="readonly" placeholder="由本金金额、利息余额自动加总显示"></el-input> -->
          <label
            class="labelFont"
            style="font-size: 14px; font-weight: 400; color: #666666"
            >由本金金额、利息余额自动加总显示</label
          >
        </el-form-item>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="债券估值-最低：">
            <el-input
              v-model="data.minValuation"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="债券估值-最可能：">
            <el-input
              v-model="data.mostLikelyValuation"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8" style="margin-top: 12px"
          ><i class="el-icon-tickets" style="margin-right: 6px"></i
          >估值模型</el-col
        >
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="债券估值-最高：">
            <el-input
              v-model="data.maxValuation"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="估值日期：">
            <!-- <el-input v-model="data.lxye" readonly="readonly" placeholder="自动显示当日日期"></el-input> -->
            <label
              class="labelFont"
              style="font-size: 14px; font-weight: 400; color: #666666"
              >{{ "new" | t }}</label
            >
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="dialogVisible = false">取 消</el-button>
      <el-button size="small" type="primary" @click="onSubmit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<style lang="scss" >
.valuationDialog {
  label {
    font-weight: 400;
  }
  .valuationForm {
    .el-form-item__label {
      font-weight: 400 !important;
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
}
</style>

<script>
import { undataPackages } from "@/api/assetPackage/index";
import { updateProjects } from "@/api/projectManagement/index";

export default {
  props: {
    projectData: {
      type: Object,
      default: () => {
        return {};
      },
    },
    type: {
      type: String,
      default: "",
    },
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      dialogVisible: false,
      titleName: "吴思远资产包",
    };
  },
  methods: {
    onSubmit() {
      if (this.type === "1") {
        updateProjects(this.projectData.id, this.data).then((res) => {
          if (res.code === 0) {
            this.dialogVisible = false;
            this.$emit("unpdata");
            this.$message({
              message: "估值信息修改成功",
              type: "success",
            });
          }
        });
      } else {
        undataPackages(this.projectData.id, this.data).then((res) => {
          if (res.code === 0) {
            this.dialogVisible = false;
            this.$emit("unpdata");
            this.$message({
              message: "估值信息修改成功",
              type: "success",
            });
          }
        });
      }
    },
  },
};
</script>