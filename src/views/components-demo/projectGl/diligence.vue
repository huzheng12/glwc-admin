<template>
  <div class="basicPage">
    <div class="titleName">
      <div class="titleName-li">
        <i class="el-icon-edit-outline elRight"></i>上传
      </div>
      <div class="titleName-li" @click="onClickLog">
        <i class="el-icon-edit-outline elRight"></i>编辑
      </div>
    </div>

    <div class="basicPage_header">
      <div class="oneDiv">
        <div class="left">
          <div class="title">授权合同编号</div>
          <div class="content">{{ projectData.creditContractId }}</div>
        </div>

        <div class="center">
          <div class="title">公证号</div>
          <div class="content">{{ projectData.notaryNumber }}</div>
        </div>

        <div class="right">
          <div class="title">授权额度</div>
          <div class="content">{{ projectData.creditLimit }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">授权时效</div>
          <div class="content BTop">{{ projectData.creditAging }}</div>
        </div>

        <div class="center">
          <div class="title BTop">提款时间</div>
          <div class="content BTop">
            {{ timeFormat(projectData.withdrawDate) }}
          </div>
        </div>

        <div class="right">
          <div class="title BTop">提款额度</div>
          <div class="content BTop">{{ projectData.withdrawLimit }}</div>
        </div>
      </div>
    </div>
    <dialog-vis
      :dataObj="data"
      :rowData="rowData"
      title="修改尽调信息"
      ref="dialog"
      labelWidth="120px"
      @submit="submit"
    ></dialog-vis>
  </div>
</template>

<script>
import dialogVis from "@/components/dialogVis";
import { updateProjects } from "@/api/projectManagement/index";
import { timeFormat } from "@/utils/timeFormat";
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
            prop: "creditContractId",
            label: "授权合同编号",
          },
          right: {
            prop: "notaryNumber",
            label: "公证号",
          },
        },
        {
          left: {
            prop: "creditLimit",
            label: "授权额度",
          },
          right: {
            prop: "creditAging",
            label: "授权时效",
          },
        },
        {
          left: {
            prop: "withdrawDate",
            label: "提款时间",
            type: "Picker",
          },
          right: {
            prop: "withdrawLimit",
            label: "提款额度",
          },
        },
      ],
    };
  },
  methods: {
    timeFormat(val) {
      return timeFormat(val);
    },
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