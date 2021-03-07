<template>
  <div class="basicPage">
    <div class="titleName">
      <div class="titleName-li" @click="projectss">
        <i class="el-icon-edit-outline elRight"></i>编辑
      </div>
    </div>
      <Eltable
        :data="packageData"
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
       packageData: {
        column: [
          {
            label: "资产包ID",
            prop: "zcbid",
            propSole:'action',
            arr: [{ style: "color: #2B57FF;cursor: pointer;", original:'zcbid'}],
          },
          {
            label: "资产包名称",
            prop: "zcbmc",
          },
          {
            label: "收益权主体",
            prop: "syzt",
          },
          {
            label: "股东类型",
            prop: "gdlx",
          },
          {
            label: "出让方",
            prop: "crf",
          },
          {
            label: "所在城市",
            prop: "szcs",
          },
          {
            label: "债权金额",
            prop: "zqse",
          },
          {
            label: "估值总额",
            prop: "gsze",
     
          },
          {
            label: "融资成本",
            prop: "rzcb",
          },
          {
            label: "预计投资收益率",
            prop: "tzsy",
           
          },
        ],
        data: [
          {
            zcbid: "40380340934",
            zcbmc: "上海平安证券",
            syzt: "上海市中级人民法院",
            gdlx: "上海平安证券有限公司",
            crf: "上海",
            szcs: "货币",
            zqse: "500万",
            gsze: "30000.00",
            rzcb: "30000.00",
            tzsy: "50%",
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