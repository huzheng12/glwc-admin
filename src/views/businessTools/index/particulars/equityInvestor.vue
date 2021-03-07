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
        :data="equityInvestorData"
        :settings="tableSettings"
      />

      <el-dialog
      title="权益人变动"
      :visible.sync="variation"
      :modal-append-to-body="false"
      append-to-body
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
       equityInvestorData: {
        column: [
          {
            label: "权益人ID",
            prop: "qyrid",
          },
          {
            label: "权益人名称",
            prop: "qyrmc",
            width:'160px',
          },
          {
            label: "国别",
            prop: "gb",
          },
          {
            label: "股东类型",
            prop: "gdlx",
          },
          {
            label: "出资日期",
            prop: "czrq",
          },
          {
            label: "出资方式",
            prop: "czfs",
          },
          {
            label: "出资比例",
            prop: "czbl",
          },
          {
            label: "认缴出资额",
            prop: "rjcze",
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
      variation:false,
       variationSettings:{
         isIndex:true, //序号
        textIndex:'序号',
        isBorder:false},
       variationData: {
        column: [
        
          {
            label: "权益人名称",
            prop: "qyrmc",
            width:'160px',
          },
          {
            label: "变更前股权比例",
            prop: "bgq",
          },
          {
            label: "变更后股权比例",
            prop: "bgh",
          },
          {
            label: "变更日期",
            prop: "bgrq",
          }
          
        ],
        data: [
          {
        
            qyrmc: "平安资产管理有限公司",
            bgq: "中国",
            bgh: "企业法人",
            bgrq: "2020-10-20",
    
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