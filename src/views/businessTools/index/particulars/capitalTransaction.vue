<template>
  <div class="basicPage">
    <div class="titleName">
     <div class="titleName-li" @click="details">
        <i class="el-icon-edit-outline elRight"></i>查看变更记录
      </div>
      <div class="titleName-li" @click="projectss">
        <i class="el-icon-edit-outline elRight"></i>添加
      </div>
    </div>
      <Eltable
        :data="packageData"
        :settings="tableSettings"
        @select="particulars"
      />
         <el-dialog
      title="资金往来记录"
      :visible.sync="variation"
      :modal-append-to-body="false"
      append-to-body
      width="68%"
    >
    <div class="dialogTitle" @click="projectss">
        <i class="el-icon-edit-outline elRight"></i>添加
      </div>
      <Eltable
        :data="variationData"
        :settings="variationSettings"
      />
    </el-dialog>
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
            label: "账户",
            prop: "zh",
          },
          {
            label: "银行名称",
            prop: "yhmc",
          },
          {
            label: "开户行",
            prop: "khh",
          },
          {
            label: "账户类型",
            prop: "zhlx",
          },
          {
            label: "账户用途",
            prop: "zhyt",
          },
          {
            label: "交易对手类型",
            prop: "dslx",
          },
          {
            label: "资金往来",
            prop: "zjwl",
             propSole:'action',
             arr: [{ style: "color: #2B57FF;cursor: pointer;", name: "详情" }],
          },
         
        ],
        data: [
          {
            zh: "40380340934",
            yhmc: "上海平安证券",
            khh: "中国建设银行",
            zhlx: "基本户",
            zhyt: "收购资产包",
            dslx: "资产管理公司",
            zjwl: ""
          },
        ],
      },
       variation:false,
        variationSettings:{
    
        isBorder:false},
       variationData: {
        column: [
        
          {
            label: "相关资产包",
            prop: "xgzcb",
          },
          {
            label: "金额",
            prop: "je",
          },
          {
            label: "交易对手",
            prop: "jyds",
          },
          {
            label: "说明",
            prop: "sm",
          },
          {
            label: "时间",
            prop: "sj",
          }
          
        ],
        data: [
          {
        
            xgzcb: "1",
            je: "2000.00",
            jyds: "上海陆金所责任有限股份公司",
            sm: "11222",
            sj: "2020-10-20",
    
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
      particulars(e) {
      console.log(e);
    },
     details(){
    this.variation=true
  }
  },
};
</script>

<style  lang="scss" scoped>
@import "@/views/components-demo/components/scss/index.scss";
.dialogTitle{
  position: absolute;
  left: 120px;
  top: 26px;
  color: #2B57FF;
}
</style>