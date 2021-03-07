<template>
  <div class="basicPage">
    <div class="titleName">
      <div class="titleName-li" @click="onClickLog">
        <i class="el-icon-edit-outline elRight"></i>编辑
      </div>
    </div>

    <div class="basicPage_header">
      <div class="oneDiv">
        <div class="left">
          <div class="title">案件编号</div>
          <div class="content">{{ projectData.caseNumber }}</div>
        </div>

        <div class="center">
          <div class="title">案件摘要</div>
          <div class="content">{{ projectData.caseSummary }}</div>
        </div>

        <div class="right">
          <div class="title">诉讼阶段</div>
          <div class="content">{{ projectData.lawsuitStage }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">所属项目</div>
          <div class="content BTop">{{ projectData.projectName }}</div>
        </div>

        <div class="center">
          <div class="title BTop">所属资产包</div>
          <div class="content BTop">{{ projectData.packageName }}</div>
        </div>

        <div class="right">
          <div class="title BTop">授权合同编号</div>
          <div class="content BTop">{{ projectData.contractId }}</div>
        </div>
      </div>

      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">涉及主体</div>
          <div class="content BTop">{{ projectData.subjectName }}</div>
        </div>

        <div class="center">
          <div class="title BTop">所属法院</div>
          <div class="content BTop">{{ projectData.court }}</div>
        </div>

        <div class="right">
          <div class="title BTop">诉讼时效</div>
          <div class="content BTop">{{ projectData.lawsuitAging }}</div>
        </div>
      </div>

      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">服务商</div>
          <div class="content BTop">{{ projectData.serviceProviderName }}</div>
        </div>

        <div class="center">
          <div class="title BTop">用途</div>
          <div class="content BTop">{{ projectData.usage }}</div>
        </div>

        <div class="right">
          <div class="title BTop"></div>
          <div class="content BTop"></div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">开始时间</div>
          <div class="content BTop">{{ projectData.startDate }}</div>
        </div>

        <div class="center">
          <div class="title BTop">结束时间</div>
          <div class="content BTop">{{ projectData.endDate }}</div>
        </div>

        <div class="right">
          <div class="title BTop">最新时间</div>
          <div class="content BTop">{{ projectData.latestDate }}</div>
        </div>
      </div>
    </div>

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
import { update } from "@/api/litigationManagement/index";

export default {
  components: { dialogVis },
  props: {
    projectData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  data() {
    return {
      data: {},
      rowData: [
        {
          left: {
            prop: "caseNumber",
            label: "案件编号",
            disabled: true,
          },
          right: {
            prop: "caseSummary",
            label: "案件摘要",
          },
        },
        {
          left: {
            prop: "lawsuitStage",
            label: "诉讼阶段",
          },
          right: {
            prop: "projectName",
            label: "所属项目",
          },
        },
        {
          left: {
            prop: "packageName",
            label: "所属资产包",
          },
          right: {
            prop: "contractId",
            label: "授权合同编号",
          },
        },
        {
          left: {
            prop: "subjectName",
            label: "涉及主体",
          },
          right: {
            prop: "court",
            label: "所属法院",
          },
        },
        {
          left: {
            prop: "lawsuitAging",
            label: "诉讼时效",
          },
          right: {
            prop: "serviceProviderName",
            label: "服务商",
          },
        },
        {
          left: {
            prop: "usage",
            label: "用途",
          },
          right: {
            prop: "startDate",
            label: "开始时间",
            type: "Picker",
          },
        },
        {
          left: {
            prop: "endDate",
            label: "结束时间",
            type: "Picker",
          },
          right: {
            prop: "latestDate",
            label: "更新时间",
            type: "Picker",
          },
        },
      ],
    };
  },
  methods: {
    onClickLog() {
      //编辑基本信息
      this.$refs.dialog.visible = true;
      this.data = JSON.parse(JSON.stringify(this.projectData));
    },
    submit() {
      update(this.projectData.id, this.data).then((res) => {
        if (res.code === 0) {
          this.$refs.dialog.visible = false;
          this.$emit("unpdata");
          this.$message({
            message: "基础信息修改成功",
            type: "success",
          });
        }
      });
    },
  },
};
</script>

<style  lang="scss" scoped>
@import "../components/scss/index.scss";
</style>