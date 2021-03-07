<template>
  <div class="basicPage">
    <div class="titleName">
      <div class="titleName-li" @click="projectss">
        <i class="el-icon-edit-outline elRight"></i>编辑
      </div>
    </div>
      <Eltable
        :data="equityInvestorData"
        :settings="tableSettings"
      />
  </div>
</template>

<script>
import { projects } from "@/api/projectManagement/index";
import Eltable from "@/components/table";
export default {
  components:{
    Eltable
  },
  data() {
    return {
      tableSettings:{isBorder:false},
       equityInvestorData: {
        column: [
          {
            label: "序号",
            prop: "xh"
          },
          {
            label: "名称",
            prop: "mc",
            width:'160px'
          },
          {
            label: "国别",
            prop: "gb"
          },
          {
            label: "股东类型",
            prop: "gdlx"
          },
        
          {
            label: "出资方式",
            prop: "czfs"
          },
          {
            label: "出资比例",
            prop: "czbl"
          },
          {
            label: "认缴出资额",
            prop: "rjcze"
          },
        ],
        data: [
          {
            xh: "40380340934",
            mc: "平安资产管理有限公司",
            gb: "中国",
            gdlx: "企业法人",
            czfs: "货币",
            czbl: "50%",
            rjcze: "30000.00",
          },
        ],
      },
    };
  },
  methods: {
    projectss() {
      projects({
        packageId: "1",
        mode: "simple",
      });
    },
  },
};
</script>

<style  lang="scss" scoped>
@import "@/views/components-demo/components/scss/index.scss";

</style>