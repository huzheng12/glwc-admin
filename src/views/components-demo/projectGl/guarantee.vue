<template>
  <div class="guarantee">
    <div class="guarantee-box-tabs">
      <div class="tabs-box">
        <div
          v-for="(item, index) in tabHeader"
          :key="index"
          :class="{ tabsHeaderLeft: true, tabsActive: tabsActive === index }"
          @click="clickActive(index)"
        >
          {{ item.title }}
        </div>
      </div>
      <div class="but-icon">
        <div class="titleName">
          <div class="titleName-li" @click="addGuarantee">
            <i class="el-icon-edit-outline elRight"></i>添加
          </div>
          <div class="titleName-li" @click="undataGuarantee">
            <i class="el-icon-edit-outline elRight"></i>编辑
          </div>
          <div class="titleName-li redDel" @click="DelGuarantee">
            <i class="el-icon-edit-outline elRight"></i>删除
          </div>
        </div>
      </div>
    </div>
    <el-table
      class="guarantee-table"
      :data="tableData"
      style="width: 100%; border: 1px solid #e7eaeb"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="name" label="名称" width="180"> </el-table-column>
      <el-table-column prop="quota" sortable label="担保责任最高限额">
      </el-table-column>
      <el-table-column prop="valuation" sortable label="保证估值">
      </el-table-column>
      <el-table-column prop="status" sortable label="状况"> </el-table-column>
    </el-table>

    <form-submit
      labelWidth="140px"
      ref="searchForm"
      title="添加保证人"
      @sublime="addUser"
      :searchData="searchData"
      :searchForm="searchForm"
      :classType="true"
    />
    <!-- :classType="true"   双行显示 -->
  </div>
</template>

<script>
import {
  projectsbails,
  addprojectsbails,
  unpdataprojectsbails,
  delprojectsbails,
  projectsotherGuaranteeslist,
  delprojectsotherGuarantees,
  projectsmortgageslist,
} from "@/api/projectManagement/index";
import formSubmit from "@/components/dialogVis/oneListform";
import dataFn from "./middleware/guarantee";
export default {
  components: { formSubmit },
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
      // 如果数据要回显后不可编辑，使用JSON.parse(JSON.stringify())转换
      searchData: {},
      searchForm: [],
      // .以上是保证人的
      id: "",
      multipleSelection: [],
      type: "",
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.listData();
  },
  methods: {
    addGuarantee() {
      // 添加担保人
      this.type = "add";
      if (this.tabsActive === 0) {
        this.searchForm = dataFn(this, "otherGuarantees");
        this.$refs.searchForm.visible = true;
        this.searchData = {};
      } else if (this.tabsActive === 1) {
        // 新增保证人
        this.searchForm = dataFn(this, "guarantor");
        this.$refs.searchForm.visible = true;
        this.searchData = {};
      } else if (this.tabsActive === 2) {
        this.$router.push(
          `/beforeInvestment/markdown/projects/${this.id}/mortgages/new`
        );
      }else if (this.tabsActive === 3) {
        this.$router.push(
          `/beforeInvestment/pledgeArr/projects/${this.id}/mortgages/new`
       
        );
      } else if (this.tabsActive === 4) {
        this.$router.push(
          `/beforeInvestment/markdown/projects/${this.id}/otherGuarantees/new`
        );
      }
    },
    undataGuarantee() {
      this.type = "und";
      if (this.tabsActive === 0) {
      } else if (this.tabsActive === 1) {
        // 编辑担保人
        if (this.multipleSelection.length === 1) {
          this.searchForm = dataFn(this, "guarantor");
          this.$refs.searchForm.visible = true;
          this.searchData = this.$k(this.multipleSelection[0]);
        } else {
          this.$message({
            message: "请选择一条数据",
            type: "warning",
          });
        }
      }else if (this.tabsActive === 2) {
        this.$router.push(
          `/beforeInvestment/markdown/projects/${this.id}/mortgages/editor`
        );
      }else if (this.tabsActive === 3) {
        this.$router.push(
          `/beforeInvestment/pledgeArr/projects/${this.id}/mortgages/editor`
       
        );
      }  else if (this.tabsActive === 4) {
        if (this.multipleSelection.length === 1) {
          sessionStorage.setItem(
            "data",
            JSON.stringify(this.multipleSelection[0])
          );
          this.$router.push(
            `/beforeInvestment/markdown/projects/${this.id}/otherGuarantees/${this.multipleSelection[0].id}`
          );
        } else {
          this.$message({
            message: "请选择一条数据",
            type: "warning",
          });
        }
      }
    },
    DelGuarantee() {
      // 删除担保人
      let funName = "";
      if (this.multipleSelection.length === 1) {
        if (this.tabsActive === 0) {
        } else if (this.tabsActive === 1) {
          funName = delprojectsbails;
        } else if (this.tabsActive === 4) {
          funName = delprojectsotherGuarantees;
        }
      } else {
        return this.$message({
          message: "请选择一条数据",
          type: "warning",
        });
      }
      this.$confirm(`是否删除 ${this.multipleSelection[0].name}`, "确认信息", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }).then(() => {
        funName(this.id, this.multipleSelection[0].id).then((res) => {
          if (res.code === 0) {
            this.$message({
              message: "删除成功",
              type: "success",
            });
            this.listData();
          }
        });
      });
    },
    listData() {
      // 获取列表
      this.tableData = [];
      let funName = "";
      if (this.tabsActive === 0) {
      } else if (this.tabsActive === 1) {
        funName = projectsbails;
      } else if (this.tabsActive === 2) {
        funName = projectsmortgageslist;
      } else if (this.tabsActive === 4) {
        funName = projectsotherGuaranteeslist;
      }

      funName &&
        funName(this.id).then((res) => {
          if (res.code === 0) {
            this.tableData = res.data;
          }
        });
    },
    clickActive(i) {
      this.tabsActive = i;
      this.listData();
    },
    addUser() {
      if (this.tabsActive === 0) {
      } else if (this.tabsActive === 1) {
        this.type === "add"
          ? addprojectsbails(this.id, this.searchData).then((res) => {
              if (res.code === 0) {
                this.$refs.searchForm.visible = false;
                this.listData();
              }
            })
          : unpdataprojectsbails(
              this.id,
              this.searchData.id,
              this.searchData
            ).then((res) => {
              if (res.code === 0) {
                this.$refs.searchForm.visible = false;
                this.listData();
              }
            });
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>

<style  lang="scss" scoped>
.guarantee {
  .guarantee-box-tabs {
    display: flex;
    justify-content: space-between;
    .tabs-box {
      display: flex;
    }
    .tabsHeaderLeft {
      width: 84px;
      height: 46px;
      border-radius: 2px 2px 0px 0px;
      border: 1px solid #e7eaeb;
      margin-right: 6px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #999999;
      line-height: 46px;
      text-align: center;
      cursor: pointer;
    }
    .tabsActive {
      background: rgba(43, 87, 255, 0.05);
      color: #2b57ff;
      border-bottom: 0;
    }
    .titleName {
      position: inherit;
      display: flex;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #2b57ff;
      align-items: center;
      height: 28px;
      cursor: pointer;
      .titleName-li {
        display: inline-block;
        margin-left: 13px;
      }
      .elRight {
        padding-right: 5px;
      }
    }
  }
}
.guarantee-table table thead tr th {
  background: rgba(43, 87, 255, 0.05);
}
</style>