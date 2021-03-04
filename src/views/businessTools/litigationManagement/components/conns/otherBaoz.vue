<template>
  <div>
    <div class="header-box">{{ headerTitle }}</div>
    <form-list
      labelWidth="140px"
      ref="searchForm"
      @sublime="addUser"
      :searchData="searchData"
      :searchForm="searchForm"
      :classType="true"
    />
  </div>
</template>

<script>
import formList from "@/components/dialogVis/formList";
import {
  addprojectsotherGuarantees,
  undataprojectsotherGuarantees,
} from "@/api/projectManagement/index";
export default {
  components: { formList },
  data() {
    return {
      headerTitle: "添加其他保证信息",
      projectId: "",
      addType: true,
      searchData: {},
      searchForm: [
        {
          type: "Input",
          label: "其他保证名称:",
          prop: "name",
          placeholder: "请输入",
          rules: [{ required: true, message: "请输入名称", trigger: "blur" }],
        },
        {
          type: "Input",
          label: "权证情况:",
          prop: "warrantSituation",
          placeholder: "请输入权证情况",
        },

        {
          type: "Input",
          label: "证件号:",
          prop: "licenseNumber",
          placeholder: "请输入证件号",
        },
        {
          type: "Input",
          label: "所有人:",
          prop: "owner",
          placeholder: "请输入所有人",
        },
        {
          type: "Input",
          label: "责任最高限额:",
          prop: "quota",
          placeholder: "请输入责任最高限额",
        },
        {
          type: "Input",
          label: "诉讼进展:",
          prop: "lawsuitProgress",
          placeholder: "请输入诉讼进展",
        },
        {
          type: "Input",
          label: "优先级:",
          prop: "priority",
          placeholder: "请输入优先级",
        },
        {
          type: "Input",
          label: "最可能市场价值:",
          prop: "mostLikelyMarketValue",
          placeholder: "请输入最可能市场价值",
        },
        {
          type: "Input",
          label: "最高市场价值:",
          prop: "highestMarketValue",
          placeholder: "请输入最高市场价值",
        },
        {
          type: "Input",
          label: "最低市场价值:",
          prop: "lowestMarketValue",
          placeholder: "请输入最低市场价值",
        },
        {
          type: "Input",
          label: "最可能到手价值:",
          prop: "mostLikelyValue",
          placeholder: "请输入最可能到手价值",
        },
        {
          type: "Input",
          label: "最高到手价值:",
          prop: "highestValue",
          placeholder: "请输入最高到手价值",
        },
        {
          type: "Input",
          label: "最低到手价值:",
          prop: "lowestValue",
          placeholder: "请输入最低到手价值",
        },
        {
          type: "Input",
          label: "欠缴税费:",
          prop: "dfOutstandingTaxes",
          placeholder: "请输入欠缴税费",
        },
        {
          type: "Input",
          label: "清场难度:",
          prop: "dfClearanceDifficulty",
          placeholder: "请输入清场难度",
        },
        {
          type: "Input",
          label: "权属瑕疵:",
          prop: "dfDefectsOfOwnership",
          placeholder: "请输入权属瑕疵",
        },
        {
          type: "Input",
          label: "交易税费",
          prop: "dfTransactionTax",
          placeholder: "请输入交易税费",
        },
        {
          type: "Input",
          label: "其他因素",
          prop: "dfOthers",
          placeholder: "请输入其他因素",
        },
        {
          type: "Input",
          label: "保证期间",
          prop: "guaranteePeriod",
          placeholder: "请输入保证期间",
        },
        {
          type: "Input",
          label: "诉讼时效",
          prop: "lawsuitAging",
          placeholder: "请输入诉讼时效",
        },
        {
          type: "Input",
          label: "申请执行期间",
          prop: "executionPeriod",
          placeholder: "请输入申请执行期间",
        },
        {
          type: "Input",
          label: "其他保证情况说明",
          prop: "situationComment",
          placeholder: "请输入其他保证情况说明",
        },
        {
          type: "Input",
          label: "其他保证值说明",
          prop: "valuationComment",
          placeholder: "请输入其他保证值说明",
        },
      ],
    };
  },
  mounted() {
    this.projectId = this.$route.params.projectId;
    const id = this.$route.params.id;
    var dt = JSON.parse(sessionStorage.getItem("data"));
    console.log(id);
    if (dt && dt.id === id) {
      this.searchData = dt;
      this.addType = false;
      this.headerTitle = "编辑诉讼情况";
    }
  },
  methods: {
    addUser() {
      this.addType
        ? addprojectsotherGuarantees(this.projectId, this.searchData).then(
            (res) => {
              if (res.code === 0) {
                this.$message({
                  message: "新建成功",
                  type: "success",
                });
                setTimeout(() => {
                  this.$router.push(
                    `/beforeInvestment/markdown/essential/${this.projectId}/2`
                  );
                }, 1000);
              }
            }
          )
        : undataprojectsotherGuarantees(
            this.projectId,
            this.searchData.id,
            this.searchData
          ).then((res) => {
            if (res.code === 0) {
              this.$message({
                message: "编辑成功",
                type: "success",
              });
              setTimeout(() => {
                this.$router.push(
                  `/beforeInvestment/markdown/essential/${this.projectId}/2`
                );
              }, 1000);
            }
          });
    },
  },
};
</script>

<style scoped lang="scss">
.header-box {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #222222;
  padding-left: 20px;
  border-bottom: 1px solid #f0f0f0;
}
</style>