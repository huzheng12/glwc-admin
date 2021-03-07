<template>
  <div class="basicPage">
    <div class="titleName">
      <div class="titleName-li" @click="projectss">
        <i class="el-icon-edit-outline elRight"></i>添加
      </div>
    </div>
      <Eltable
        :data="relevanceData"
        :settings="tableSettings"
        @select="particulars"
      />
      <el-dialog
  title="添加关联项目"
  :visible.sync="dialogVisible"
>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-row :gutter="22">
  <el-col :span="12">
 <el-form-item label="项目名称:">
    <el-input v-model="formInline.xmmc" placeholder="审批人"></el-input>
  </el-form-item>
   </el-col>
  <el-col :span="10">
  <el-form-item label="项目编号:">
    <span>{{formInline.xmbh}}</span>
  </el-form-item>
   </el-col>
</el-row>
    <el-row :gutter="22">
  <el-col :span="12">
<el-form-item label="所属资产包:">
   <span>{{formInline.sszcb}}</span>
  </el-form-item>
   </el-col>
  <el-col :span="10">
 <el-form-item label="债卷估值:">
    <span>{{formInline.zjgz}}</span>
  </el-form-item>
   </el-col>
</el-row>
</el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>

  <el-dialog
  title="添加关联项目"
  :modal-append-to-body="false"
      append-to-body
  :visible.sync="costDetails"
  top='10px'
>
<CostDetails />
 </el-dialog>
  </div>
</template>

<script>
import { projects } from "@/api/projectManagement/index";
import Eltable from "@/components/table";
import CostDetails from "./costDetails";
export default {
  components:{
    Eltable,
    CostDetails
  },
  data() {
    return {
      tableSettings:{isBorder:false},
      relevanceData: {
        column: [
         
          {
            label: "项目编号",
            prop: "xmbh",
          },
          {
              propSole: "action",
            label: "项目名称",
            prop: "xmmc",
            width:'140px',
            arr: [{ style: "color: #2B57FF;cursor: pointer;",original:'xmmc'}],
          },
          {
            label: "所属资产包",
            prop: "sszcb",
          },
          {
            label: "债权银行",
            prop: "zqyh",
          },
          {
            label: "城市",
            prop: "cs",
          },
          {
            label: "债权估值",
            prop: "zqgz",
          },
          {
            label: "用途",
            prop: "yt",
          },
         
          {
            label: "服务内容说明",
            prop: "fwnrsm",
            width:'100px',
          },
          {
            label: "累计费用",
            prop: "ljfy",
          },
         
          {
            label: "更新时间",
            prop: "gxsj",
          },
         
          {
              propSole: "action",
            label: "费用详情",
            prop: "fyxq",
            arr: [{ style: "color: #2B57FF;cursor: pointer;", name: "详情" }],
          },
         
         
        ],
        data: [
          {
            xmbh: "12344567",
            xmmc: "上海平安证券有限公司",
            sszcb: "东方1号",
            zqyh: "中国建设银行",
            cs: "上海",
            zqgz: "50000.00",
            yt: "诉讼",
            fwnrsm: "字段",
            ljfy: "50000.00",
            gxsj: "2020/10/30",
            fyxq: "",
          }
          
        ],
      },
      dialogVisible:false,
      formInline:{
        xmmc:'',
        xmbh:'2329434343434',
        sszcb:'东方1号',
        zjgz:'109800.00'
      },
      costDetails:false,
    };
  },
  methods: {
    projectss() {
      // projects({
      //   packageId: "1",
      //   mode: "simple",
      // });
this.dialogVisible=true
    },
    particulars(e) {
      console.log(e);
      this.costDetails = true;
    },
  },
};
</script>

<style  lang="scss" scoped>
@import "@/views/components-demo/components/scss/index.scss";

</style>