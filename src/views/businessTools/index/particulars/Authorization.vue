<template>
  <div class="basicPage">
    <div class="titleName">
      <div class="titleName-li" @click="projectss">
        <i class="el-icon-edit-outline elRight"></i>编辑
      </div>
    </div>
      <el-table 
        :data="accreditData.data" 
        style="width: 100%;border: 1px solid #E7EAEB;"
        >
          <el-table-column
            v-for="(item, i) in accreditData.column"
            :key="i"
            :prop="item.prop"
            :label="item.label"
            
            show-overflow-tooltip
          >
           <template scope="scope" v-if="item.prop=='sqlx'||item.prop=='sqdxmc'">
            <span v-if="item.prop=='sqlx'" :style="{'color': scope.row.sqlx=='特殊授权'?'#D12A2A':'#000'}" >{{scope.row.sqlx}}</span>
            <span v-else style="color: #2B57FF;" >{{scope.row.sqdxmc}}</span>
          </template>
          </el-table-column>
        </el-table>
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
        accreditData: {
        column: [
          {
            label: "授权编号",
            prop: "sqbh",
          },
          {
            label: "授权对象类别",
            prop: "sqdxlb",
          },
          {
            label: "授权对象名称",
            prop: "sqdxmc",
          },
        
          {
            label: "授权类型",
            prop: "sqlx",
          },
          {
            label: "授权内容",
            prop: "sqnr",
          },
          {
            label: "授权期间",
            prop: "sqqj",
          },
       
        ],
        data: [
          {
            sqbh: "123456",
            sqdxlb: "上海平安证券",
            sqdxmc: "中国建设银行",
            sqlx: "特殊授权",
            sqnr: "内容",
            sqqj: "2020年3月20日"
          },
          {
            sqbh: "123456",
            sqdxlb: "上海平安证券",
            sqdxmc: "中国建设银行",
            sqlx: "普通授权",
            sqnr: "内容",
            sqqj: "2020年3月20日"
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