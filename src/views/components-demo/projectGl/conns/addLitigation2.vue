<template>
  <div>
    <div class="header-box">{{ headerTitle }}</div>
    <form-list
      labelWidth="140px"
      ref="searchForm"
      title="添加保证人"
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
  addprojectslawsuits,
  updataprojectslawsuits,
} from "@/api/projectManagement/index";
export default {
  components: { formList },
  data() {
    let entrustProps = { label: "label", value: "value" };
    return {
      headerTitle: "添加诉讼情况",
      projectId: "",
      addType: true,
      searchData: {},
      searchForm: [
        {
          type: "Input",
          label: "诉讼事项:",
          prop: "name",
          placeholder: "请输入",
          rules: [
            { required: true, message: "请输入诉讼事项", trigger: "blur" },
          ],
        },
        {
          type: "Input",
          label: "诉讼时效:",
          prop: "lawsuitAging",
          placeholder: "请输入诉讼时效",
        },

        {
          type: "Input",
          label: "债务人:",
          prop: "debtor",
          placeholder: "请输入债务人",
        },
        {
          type: "Input",
          label: "执行情况:",
          prop: "executionStatus",
          placeholder: "请输入执行情况",
        },
        {
          type: "Input",
          label: "法院:",
          prop: "court",
          placeholder: "请输入法院",
        },
        {
          type: "Select",
          label: "是否变更执行主体:",
          prop: "subjectChanged",
          options: [
            { label: "是", value: "1" },
            { label: "否", value: "0" },
          ],
          props: entrustProps,
        },
        {
          type: "Input",
          label: "服务商ID:",
          prop: "serviceProviderId",
        },
        {
          type: "Input",
          label: "授权状态:",
          prop: "authStatus",
        },
        {
          type: "Input",
          label: "案件编号:",
          prop: "caseNumber",
        },
        {
          type: "Input",
          label: "案件摘要:",
          prop: "caseSummary",
        },
        {
          type: "Input",
          label: "诉讼阶段:",
          prop: "lawsuitStage",
        },
        {
          type: "Input",
          label: "所属项目ID:",
          prop: "projectId",
        },
        {
          type: "Input",
          label: "所属资产包ID:",
          prop: "packageId",
        },
        {
          type: "Input",
          label: "涉及主体ID:",
          prop: "subjectId",
        },
        {
          type: "Date",
          label: "开始时间:",
          prop: "startTime",
        },
        {
          type: "Date",
          label: "结束时间:",
          prop: "endTime",
        },
      ],
    };
  },
  mounted() {
    this.projectId = this.$route.params.projectId;
    const id = this.$route.params.id;
    var dt = JSON.parse(sessionStorage.getItem("data"));
    if (dt.id === id) {
      this.searchData = dt;
      this.addType = false;
      this.headerTitle = "编辑诉讼情况";
    }
  },
  methods: {
    addUser() {
      this.addType
        ? addprojectslawsuits(this.projectId, this.searchData).then((res) => {
            if (res.code === 0) {
              this.$message({
                message: "新建成功",
                type: "success",
              });
              setTimeout(() => {
                this.$router.push(
                  `/beforeInvestment/markdown/essential/${this.projectId}&&point=3`
                );
              }, 1000);
            }
          })
        : updataprojectslawsuits(
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
                  `/beforeInvestment/markdown/essential/${this.projectId}&&point=3`
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