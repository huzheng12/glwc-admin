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
      labelWidth="180px"
      ref="searchForm"
      title="添加保证人"
      @sublime="addUser"
      :searchData="searchData"
      :searchForm="searchForm"
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
} from "@/api/projectManagement/index";
import formSubmit from "@/components/dialogVis/oneListform";

export default {
  components: { formSubmit },
  data() {
    let caseState = [
      { label: "法人", value: "法人" },
      { label: "自然人", value: "自然人" },
    ];
    let entrustProps = { label: "label", value: "value" };

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
      searchForm: [
        {
          type: "Input",
          label: "保证人名称:",
          prop: "name",
          placeholder: "请输入",
          rules: [
            { required: true, message: "请输入活动名称", trigger: "blur" },
          ],
        },
        {
          type: "Select",
          label: "保证人类型",
          prop: "type",
          options: caseState,
          props: entrustProps,
          placeholder: "请选择保证人类型",
        },
        {
          type: "Input",
          label: "证件号:",
          prop: "licenseNumber",
          placeholder: "请输入证件号",
        },
        {
          type: "Select",
          label: "状况:",
          prop: "status",
          options: [
            {
              value: "法人-存续",
              label: "法人-存续",
            },
          ],
          props: entrustProps,
          placeholder: "请选择状况",
        },
        {
          type: "Input",
          label: "担保责任最高限额:",
          prop: "quota",
          placeholder: "请输入担保责任最高限额",
        },
        {
          type: "Input",
          label: "保证估值:",
          prop: "valuation",
          placeholder: "请输入保证估值",
        },
        {
          type: "Textarea",
          label: "保证人情况说明:",
          prop: "situationComment",
          maxlength: 200,
          placeholder: "请输入保证人情况说明",
        },
        {
          type: "Textarea",
          label: "保证人估值说明:",
          prop: "valuationComment",
          maxlength: 200,
          placeholder: "请输入保证人估值说明",
        },
      ],
      // .以上是保证人的

      id: "",
      multipleSelection: [],
      type: "",
    };
  },
  mounted() {
    this.id = this.$route.params.id.split("&&")[0];
    this.listData();
  },
  methods: {
    addGuarantee() {
      // 添加担保人
      this.type = "add";
      if (this.tabsActive === 0) {
      } else if (this.tabsActive === 1) {
        this.$refs.searchForm.visible = true;
        this.searchData = {};
      }
    },
    undataGuarantee() {
      // 编辑担保人
      this.type = "und";
      if (this.tabsActive === 0) {
      } else if (this.tabsActive === 1) {
        if (this.multipleSelection.length === 1) {
          this.$refs.searchForm.visible = true;
          this.searchData = this.$k(this.multipleSelection[0]);
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
      if (this.tabsActive === 0) {
      } else if (this.tabsActive === 1) {
        if (this.multipleSelection.length === 1) {
          this.searchData = this.$k(this.multipleSelection[0]);
          delprojectsbails(this.id, this.searchData.id).then((res) => {
            if (res.code === 0) {
              this.listData();
            }
          });
        } else {
          this.$message({
            message: "请选择一条数据",
            type: "warning",
          });
        }
      }
    },
    listData() {
      // 获取列表
      if (this.tabsActive === 0) {
      } else if (this.tabsActive === 1) {
        projectsbails(this.id).then((res) => {
          if (res.code === 0) {
            this.tableData = res.data;
          }
        });
      }
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