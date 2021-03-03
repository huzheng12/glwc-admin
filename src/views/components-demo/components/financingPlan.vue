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
          <div class="title">融资编号</div>
          <div class="content">{{ projectData.financingId }}</div>
        </div>

        <div class="center">
          <div class="title">融资主体</div>
          <div class="content">{{ projectData.financingSubjectId }}</div>
        </div>

        <div class="right">
          <div class="title">收益权主体</div>
          <div class="content">{{ projectData.beneficiaryId }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">交易类型</div>
          <div class="content BTop">{{ projectData.transactionType }}</div>
        </div>

        <div class="center">
          <div class="title BTop">收购类型</div>
          <div class="content BTop">{{ projectData.acquisitionType }}</div>
        </div>

        <div class="right">
          <div class="title BTop">保证⾦⾦额</div>
          <div class="content BTop">{{ projectData.deposit }}</div>
        </div>
      </div>

      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">资⾦来源</div>
          <div class="content BTop">{{ projectData.fundSource }}</div>
        </div>

        <div class="center">
          <div class="title BTop">融资成本</div>
          <div class="content BTop">{{ projectData.financingCost }}</div>
        </div>

        <div class="right">
          <div class="title BTop">再投资收益率</div>
          <div class="content BTop">{{ projectData.reinvestmentRate }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">预计交易时间</div>
          <div class="content BTop">
            {{ projectData.estTransactionTime | t }}
          </div>
        </div>

        <div class="center">
          <div class="title BTop">⽀付安排</div>
          <div class="content BTop">{{ projectData.payArrange }}</div>
        </div>

        <div class="right">
          <div class="title BTop">回收安排</div>
          <div class="content BTop">{{ projectData.recycleArrange }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">服务商名称</div>
          <div class="content BTop">{{ projectData.serviceProviderName }}</div>
        </div>

        <div class="center">
          <div class="title BTop">其他合作⽅</div>
          <div class="content BTop">{{ projectData.otherPartners }}</div>
        </div>

        <div class="right">
          <div class="title BTop"></div>
          <div class="content BTop"></div>
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
// undataPackages
import { undataPackages } from "@/api/assetPackage/index";

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
            prop: "financingId",
            label: "融资编号",
          },
          right: {
            prop: "financingSubjectId",
            label: "融资主体",
          },
        },
        {
          left: {
            prop: "beneficiaryId",
            label: "收益权主体",
          },
          right: {
            prop: "transactionType",
            label: "交易类型",
          },
        },
        {
          left: {
            prop: "acquisitionType",
            label: "收购类型",
          },
          right: {
            prop: "deposit",
            label: "保证⾦⾦额",
          },
        },
        {
          left: {
            prop: "fundSource",
            label: "资⾦来源",
          },
          right: {
            prop: "financingCost",
            label: "融资成本",
          },
        },
        {
          left: {
            prop: "reinvestmentRate",
            label: "再投资收益率",
          },
          right: {
            prop: "estTransactionTime",
            label: "预计交易时间",
            type: "Picker",
          },
        },
        {
          left: {
            prop: "payArrange",
            label: "⽀付安排",
          },
          right: {
            prop: "recycleArrange",
            label: "回收安排",
          },
        },
        {
          left: {
            prop: "serviceProviderName",
            label: "服务商名称",
          },
          right: {
            prop: "otherPartners",
            label: "其他合作⽅",
          },
        },
      ],
    };
  },
  methods: {
    onClickLog() {
      //编辑融资方案
      this.$refs.dialog.visible = true;
      this.data = JSON.parse(JSON.stringify(this.projectData));
    },
    submit() {
      undataPackages(this.projectData.id, this.data).then((res) => {
        if (res.code === 0) {
          this.$refs.dialog.visible = false;
          this.$emit("unpdata");
          this.$message({
            message: "融资方案修改成功",
            type: "success",
          });
        }
      });
    },
  },
};
</script>

<style  lang="scss" scoped>
@import "../../components-demo/components/scss/index.scss";
</style>