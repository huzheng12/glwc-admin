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
          <div class="content">{{ projectData.id }}</div>
        </div>

        <div class="center">
          <div class="title">资产包名称</div>
          <div class="content">{{ projectData.name }}</div>
        </div>

        <div class="right">
          <div class="title">资产性质</div>
          <div class="content">{{ projectData.assetType }}</div>
        </div>
      </div>
      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">出让方</div>
          <div class="content BTop">{{ projectData.transferor }}</div>
        </div>

        <div class="center">
          <div class="title BTop">出让方简称</div>
          <div class="content BTop">{{ projectData.transferorAbbr }}</div>
        </div>

        <div class="right">
          <div class="title BTop">城市</div>
          <div class="content BTop">{{ projectData.city }}</div>
        </div>
      </div>

      <div class="oneDiv">
        <div class="left">
          <div class="title BTop">债权户数</div>
          <div class="content BTop">{{ projectData.creditorNum }}</div>
        </div>

        <div class="center">
          <div class="title BTop">责任人</div>
          <div class="content BTop">{{ projectData.responsible }}</div>
        </div>

        <div class="right">
          <div class="title BTop">基准日期</div>
          <div class="content BTop">{{ projectData.baseDate | t }}</div>
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
            prop: "id",
            label: "资产包编号",
            disabled: true,
          },
          right: {
            prop: "name",
            label: "资产包名称",
          },
        },
        {
          left: {
            prop: "assetType",
            label: "资产性质",
          },
          right: {
            prop: "transferor",
            label: "出让方",
          },
        },
        {
          left: {
            prop: "transferorAbbr",
            label: "出让方简称",
          },
          right: {
            prop: "city",
            label: "城市",
          },
        },
        {
          left: {
            prop: "creditorNum",
            label: "债权户数",
          },
          right: {
            prop: "responsible",
            label: "责任人",
          },
        },
        {
          left: {
            prop: "baseDate",
            label: "基准日期",
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
      undataPackages(this.projectData.id, this.data).then((res) => {
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
@import "../components-demo/components/scss/index.scss";
</style>