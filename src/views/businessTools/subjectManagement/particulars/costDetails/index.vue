<template>
 <div>

<!-- 协定付费方式 -->
 <div class="subclass">
      <div class="labelTitel">
        <div>协定付费方式</div>
       
      </div>
        <el-input
  type="textarea"
  :rows="5"
  :disabled="true"
  v-model="textarea">
</el-input>
     
    </div>
<!-- 发生费用 -->
  <div class="subclass">
      <div class="labelTitel">
        <div>发生费用</div>
        <span class="svg-container">
          <svg-icon icon-class="user" />
          添加
        </span>
      </div>

      <Eltable
        :data="costData"
        :settings="tableSettings"

      />
    </div>
<!-- 相关文件 -->
  <div class="subclass">
      <div class="labelTitel">
        <div>发生费用</div>
        
      </div>

      <FileDetails/>
    </div>
 </div>
  
</template>

<script>
import { projects } from "@/api/projectManagement/index";
import Eltable from "../../components/table";
import FileDetails from "./fileDetails";

export default {
    props: {
   
  },
  components:{
    Eltable,
    FileDetails
  },
  data() {
    return {
      tableSettings:{
        isBorder:false
      },
       costData: {
        column: [
         
          {
            label: "时间节点",
            prop: "sjjd",
          },
          {
            label: "费用金额",
            prop: "fyje",
          },
          {
            label: "费用比例",
            prop: "fybl",
          },
          {
            label: "对应流程",
            prop: "dylc",
          },
          {
            label: "核算方法",
            prop: "hsff",
          },
          {
            label: "说明",
            prop: "sm",
          },
         
        ],
        data: [
          {
            sjjd: "2020/10/30",
            fyje: "10000",
            fybl: "50%",
            dylc: "字段1",
            hsff: "字段2",
            sm: "字段3"
        
          },
         
        ],
      },
      textarea:''
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
.labelTitel {
  font-weight: 500;
  color: #222222;
  font-size: 14px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  > div {
    padding-left: 5px;
    border-left: 3px solid #2B57FF;
  }
  > span {
    font-size: 12px;
    color: #2b57ff;
  }
}
.subclass {
  margin-bottom: 30px;
}
</style>