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
           <template scope="scope" v-if="item.prop=='sqlx'">
            <span :style="{'color': scope.row.sqlx=='特殊授权'?'#D12A2A':'#000'}" >{{scope.row.sqlx}}</span>
          </template>
          </el-table-column>
        </el-table>
  </div>
</template>

<script>
import { projects } from "@/api/projectManagement/index";
import Eltable from "../components/table";
export default {
  components:{
    Eltable
  },
  data() {
    return {
        accreditData: {
        column: [
          {
            label: "授权状态",
            prop: "sqzt",
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
            sqzt: "已授权",
            sqlx: "特殊授权",
            sqnr: "内容",
            sqqj: "2020年3月20日"
          },
          {
            sqzt: "已授权",
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