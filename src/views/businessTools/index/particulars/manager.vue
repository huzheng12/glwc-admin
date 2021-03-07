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
        :data="managerData"
        :settings="tableSettings"
       
      />

      <el-dialog
      title="人事变动"
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
      tableSettings:{
        isIndex:true, //序号
        textIndex:'序号',
        isBorder:false
      },
       managerData: {
        column: [
         
          {
            label: "姓名",
            prop: "xm",
          },
          {
            label: "职务",
            prop: "zw",
          },
         
        ],
        data: [
          {
            xm: "吴思远",
            zw: "产品总监"
        
          },
          {
            xm: "吴思远",
            zw: "产品总监"
        
          }
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
            label: "姓名",
            prop: "qyrmc",
          },
          {
            label: "人事变动记录",
            prop: "bgq",
          },
          {
            label: "变动原因",
            prop: "bgh",
          },
          {
            label: "变动生效日期",
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