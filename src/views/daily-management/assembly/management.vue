<template>
  <div class="basicPage">
    <div class="titleName">
      <div class="titleName-li" @click="onClickLog">
        <i class="el-icon-edit-outline elRight"></i>添加
      </div>
      <div class="titleName-li" @click="onClickLog">
        <i class="el-icon-edit-outline elRight"></i>编辑
      </div>
      <div class="titleName-li" @click="onClickLog">
        <i class="el-icon-edit-outline elRight"></i>详情
      </div>
    </div>

    <div class="basicPage_header">
      <div class="oneDiv">
        <div class="left">
          <div class="title">处置方式</div>
          <div class="content"></div>
        </div>

        <div class="center">
          <div class="title">处置状态</div>
          <div class="content"></div>
        </div>

        <div class="right">
          <div class="title">受买人主体</div>
          <div class="content"></div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">处置类型</div>
          <div class="content BTop"></div>
        </div>

        <div class="center">
          <div class="title BTop">预期金额汇总</div>
          <div class="content BTop"></div>
        </div>

        <div class="right">
          <div class="title BTop">是否涉诉</div>
          <div class="content BTop"></div>
        </div>
      </div>

      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">方案审批</div>
          <div class="content BTop"></div>
        </div>

        <div class="center">
          <div class="title BTop">费用审批</div>
          <div class="content BTop"></div>
        </div>

        <div class="right">
          <div class="title BTop">处置进度</div>
          <div class="content BTop"></div>
        </div>
      </div>

      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">项目金额汇总</div>
          <div class="content BTop"></div>
        </div>

        <div class="center">
          <div class="title BTop">回收金额汇总</div>
          <div class="content BTop"></div>
        </div>

        <div class="right">
          <div class="title BTop">费用发生汇总</div>
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
import { updateProjects } from "@/api/projectManagement/index";

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
            prop: "id",
            label: "项目编号",
            disabled: true,
          },
          right: {
            prop: "name",
            label: "项目名称",
          },
        },
        {
          left: {
            prop: "packageId",
            label: "所属资产包",
          },
          right: {
            prop: "debtor",
            label: "债务人",
          },
        },
        {
          left: {
            prop: "creditorBank",
            label: "债权银行",
          },
          right: {
            prop: "name",
            label: "当前执行主体",
          },
        },
        {
          left: {
            prop: "city",
            label: "城市",
          },
          right: {
            prop: "latestSubordinate",
            label: "最新从属",
          },
        },
        {
          left: {
            prop: "responsible",
            label: "诉讼时效",
          },
          right: {
            prop: "lawsuitAging",
            label: "收购成本分摊",
          },
        },
        {
          left: {
            prop: "responsible",
            label: "已发生费用",
          },
          right: {
            prop: "lawsuitAging",
            label: "责任人",
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
      updateProjects(this.projectData.id, this.data).then((res) => {
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
@import "../../components-demo/components/scss/index.scss";
</style>