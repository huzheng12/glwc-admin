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
import Eltable from "../table";
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
            label: "权益人ID",
            prop: "qyrid",
            fixed: true
          },
          {
            label: "权益人名称",
            prop: "qyrmc",
            width:'160px',
            fixed: true
          },
          {
            label: "国别",
            prop: "gb",
            fixed: true
          },
          {
            label: "股东类型",
            prop: "gdlx",
            fixed: true
          },
          {
            label: "出资日期",
            prop: "czrq",
            fixed: true
          },
          {
            label: "出资方式",
            prop: "czfs",
            fixed: true
          },
          {
            label: "出资比例",
            prop: "czbl",
            fixed: true
          },
          {
            label: "认缴出资额",
            prop: "rjcze",
            fixed: true
          },
        ],
        data: [
          {
            qyrid: "40380340934",
            qyrmc: "平安资产管理有限公司",
            gb: "中国",
            gdlx: "企业法人",
            czrq: "2020-10-20",
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