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
          <div class="title">项目编号</div>
          <div class="content">{{ projectData.id }}</div>
        </div>

        <div class="center">
          <div class="title">项目名称</div>
          <div class="content">{{ projectData.name }}</div>
        </div>

        <div class="right">
          <div class="title">所属资产包</div>
          <div class="content">{{ projectData.packageName }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">债务人</div>
          <div class="content BTop">{{ projectData.debtor }}</div>
        </div>

        <div class="center">
          <div class="title BTop">债权银行</div>
          <div class="content BTop">{{ projectData.creditorBank }}</div>
        </div>

        <div class="right">
          <div class="title BTop">当前执行主体</div>
          <div class="content BTop">{{ projectData.cs }}</div>
        </div>
      </div>

      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">城市</div>
          <div class="content BTop">{{ projectData.city }}</div>
        </div>

        <div class="center">
          <div class="title BTop">最新从属</div>
          <div class="content BTop">{{ projectData.latestSubordinate }}</div>
        </div>

        <div class="right">
          <div class="title BTop">责任人</div>
          <div class="content BTop">{{ projectData.responsible }}</div>
        </div>
      </div>

      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">诉讼时效</div>
          <div class="content BTop">{{ projectData.lawsuitAging }}</div>
        </div>

        <div class="center">
          <div class="title BTop"></div>
          <div class="content BTop"></div>
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
            label: "责任人",
          },
          right: {
            prop: "lawsuitAging",
            label: "诉讼时效",
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
@import "../components/scss/index.scss";
</style>