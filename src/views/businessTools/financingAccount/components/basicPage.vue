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
          <div class="title">资产包编号</div>
          <div class="content">{{ projectData.packageId }}</div>
        </div>

        <div class="center">
          <div class="title">资产包名称</div>
          <div class="content">{{ projectData.packageName }}</div>
        </div>

        <div class="right">
          <div class="title">融资主体名称</div>
          <div class="content">{{ projectData.financeSubjectName }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">资⾦⽤途</div>
          <div class="content BTop">{{ projectData.fundUsage }}</div>
        </div>

        <div class="center">
          <div class="title BTop">资⾦提供⽅</div>
          <div class="content BTop">{{ projectData.fundProvider }}</div>
        </div>

        <div class="right">
          <div class="title BTop">收购成本</div>
          <div class="content BTop">{{ projectData.协定融资额 }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">到位资⾦额</div>
          <div class="content BTop">{{ projectData.readyBalance }}</div>
        </div>

        <div class="center">
          <div class="title BTop">融资本⾦余额</div>
          <div class="content BTop">{{ projectData.principleBalance }}</div>
        </div>

        <div class="right">
          <div class="title BTop">融资协议签署⽇期</div>
          <div class="content BTop">{{ projectData.issueDate }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">期限</div>
          <div class="content BTop">{{ projectData.duePeriod }}</div>
        </div>

        <div class="center">
          <div class="title BTop">期限单位（⽉/年）</div>
          <div class="content BTop">{{ projectData.duePeriodUnit }}</div>
        </div>

        <div class="right">
          <div class="title BTop">到期⽇</div>
          <div class="content BTop">{{ projectData.dueDate }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">利率</div>
          <div class="content BTop">{{ projectData.interestRate }}</div>
        </div>

        <div class="center">
          <div class="title BTop">增信主体名称</div>
          <div class="content BTop">{{ projectData.ceSubjectName }}</div>
        </div>

        <div class="right">
          <div class="title BTop">增信措施</div>
          <div class="content BTop">{{ projectData.ceMethod }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">本期应还⽇期</div>
          <div class="content BTop">{{ projectData.currentPayBackDate }}</div>
        </div>

        <div class="center">
          <div class="title BTop">本期应还⾦额</div>
          <div class="content BTop">{{ projectData.currentPayBackBalance }}</div>
        </div>

        <div class="right">
          <div class="title BTop">备注</div>
          <div class="content BTop">{{ projectData.remark }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">创建时间</div>
          <div class="content BTop">{{ projectData.createdAt }}</div>
        </div>

        <div class="center">
          <div class="title BTop">更新时间</div>
          <div class="content BTop">{{ projectData.updatedAt }}</div>
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
import { update } from "@/api/financingAccount/index";

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
            prop: "packageId",
            label: "资产包ID",
            disabled: true,
          },
          right: {
            prop: "financeSubjectId",
            label: "融资主体ID",
          },
        },
        {
          left: {
            prop: "fundUsage",
            label: "资⾦⽤途",
          },
          right: {
            prop: "资⾦提供⽅",
            label: "所属项目",
          },
        },
        {
          left: {
            prop: "requiredBalance",
            label: "协定融资额",
          },
          right: {
            prop: "readyBalance",
            label: "到位资⾦额",
          },
        },
        {
          left: {
            prop: "principleBalance",
            label: "融资本⾦余额",
          },
          right: {
            prop: "issueDate",
            label: "融资协议签署⽇期",
            type: "Picker",
          },
        },
        {
          left: {
            prop: "duePeriod",
            label: "期限",
          },
          right: {
            prop: "duePeriodUnit",
            label: "期限单位（⽉/年）",
          },
        },
        {
          left: {
            prop: "dueDate",
            label: "到期⽇",
            type: "Picker",
          },
          right: {
            prop: "interestRate",
            label: "利率",
          },
        },
        {
          left: {
            prop: "ceSubjectId",
            label: "增信主体ID",
          },
          right: {
            prop: "ceMethod",
            label: "增信措施",
          },
        },
        {
          left: {
            prop: "currentPayBackDate",
            label: "本期应还⽇期",
            type: "Picker",
          },
          right: {
            prop: "currentPayBackBalance",
            label: "本期应还⾦额",
            type: "Picker",
          },
        },
        {
          left: {
            prop: "remark",
            label: "备注",
          },
          right: null,
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