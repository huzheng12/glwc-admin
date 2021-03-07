<template>
  <div class="basicPage">
    <div class="titleName">
      <div class="titleName-li" @click="projectss">
        <i class="el-icon-edit-outline elRight"></i>编辑
      </div>
    </div>
 <Eltable
        :data="managerData"
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