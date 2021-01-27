<template>
  <router-type>
    <header-box
      :searchData="searchData"
      :inputData="inputData"
      :rightBut="rightBut"
    ></header-box>
    <div class="table-content">
      <!-- 资产包管理页面 -->
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column fixed prop="zcbbh" label="资产包编号" width="120">
          <template slot-scope="scope">
            <i class="el-icon-star-off"></i>&nbsp;&nbsp;{{ scope.row.zcbbh }}
          </template>
        </el-table-column>
        <el-table-column fixed prop="zcbmc" label="资产包名称" width="120">
        </el-table-column>
        <el-table-column fixed label="操作" width="120">
          <template slot-scope="scope">
            <el-dropdown>
              <span class="el-dropdown-link">
                {{ scope.row.value
                }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="toInformation"
                  >基本信息</el-dropdown-item
                >
                <el-dropdown-item>估值信息</el-dropdown-item>
                <el-dropdown-item>所属项目</el-dropdown-item>
                <el-dropdown-item>融资方案</el-dropdown-item>
                <el-dropdown-item>文件管理</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
        <el-table-column fixed label="文档" width="120">
          <template slot-scope="scope">
            <el-link type="primary">{{ scope.row.wd }}</el-link>
          </template>
        </el-table-column>
        <el-table-column label="持有主体" width="120">
          <template slot-scope="scope">
            <span class="span_bottom">{{ scope.row.cyzt }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="syqzt" label="收益权主体" width="120">
          <template slot-scope="scope">
            <span class="span_bottom">{{ scope.row.syqzt }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="crfjc" label="出让方简称" width="120">
          <template slot-scope="scope">
            <span class="span_bottom">{{ scope.row.crfjc }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="cs" label="城市" width="120"> </el-table-column>
        <el-table-column prop="zqze" sortable label="债权总额" width="140">
        </el-table-column>
        <el-table-column prop="gzzkn" sortable label="估值_最可能" width="140">
        </el-table-column>
        <el-table-column prop="zqhs" label="债券户数" width="120">
        </el-table-column>
        <el-table-column prop="rzcb" label="融资成本" width="120">
        </el-table-column>
        <el-table-column prop="ztzsyl" label="再投资收益率" width="120">
        </el-table-column>
        <el-table-column prop="zrr" label="责任人" width="120">
        </el-table-column>
        <el-table-column prop="gxsj" label="更新时间" width="120">
        </el-table-column>
      </el-table>

      <pagination :tablePagination="tablePagination"></pagination>
    </div>
  </router-type>
</template>

<script>
import headerBox from "./components/header";
import pagination from "./components/pagination";
import { mapState } from "vuex";

export default {
  components: {
    headerBox,
    pagination,
  },
  data() {
    return {
      tablePagination: { current: 1, size: 10, total: 10 },
      inputData: [
        {
          type: "datePicker",
          prop: "sdas",
          placeholder: "请选择日期",
          prefixIcon: "el-icon-date",
          width: "140px",
        },
        {
          type: "Input",
          prop: "input",
          placeholder: "请输入地点",

          width: "140px",
        },
        {
          type: "Input",
          prop: "asd",
          placeholder: "请输入关键字查询",
          prefixIcon: "el-icon-search",
        },
      ],
      tableData: [
        {
          zcbbh: "b201910101",
          zcbmc: "东方一号",
          cz: "编辑",
          wd: "明细",
          mx: "明细",
          cyzt: "c1",
          syqzt: "L1",
          crfjc: "东方上海",
          cs: "上海",
          zqze: "639580",
          gzzkn: "49736.78",
          zqhs: "5",
          rzcb: "6.00%",
          ztzsyl: "35.00%",
          zrr: "张三",
          gxsj: "2019/01/10",
          options: [
            {
              value: "选项1",
              label: "黄金糕",
            },
            {
              value: "选项2",
              label: "双皮奶",
            },
            {
              value: "选项3",
              label: "蚵仔煎",
            },
            {
              value: "选项4",
              label: "龙须面",
            },
            {
              value: "选项5",
              label: "北京烤鸭",
            },
          ],
          value: "编辑",
        },
        {
          zcbbh: "b201910101",
          zcbmc: "东方一号",
          cz: "编辑",
          wd: "明细",
          mx: "明细",
          cyzt: "c1",
          syqzt: "L1",
          crfjc: "东方上海",
          cs: "北京",
          zqze: "1180",
          gzzkn: "59736.78",
          zqhs: "5",
          rzcb: "6.00%",
          ztzsyl: "35.00%",
          zrr: "张三",
          gxsj: "2019/01/10",
          options: [
            {
              value: "选项1",
              label: "黄金糕",
            },
            {
              value: "选项2",
              label: "双皮奶",
            },
            {
              value: "选项3",
              label: "蚵仔煎",
            },
            {
              value: "选项4",
              label: "龙须面",
            },
            {
              value: "选项5",
              label: "北京烤鸭",
            },
          ],
          value: "编辑",
        },
        {
          zcbbh: "b201910101",
          zcbmc: "东方一号",
          cz: "编辑",
          wd: "明细",
          mx: "明细",
          cyzt: "c1",
          syqzt: "L1",
          crfjc: "东方上海",
          cs: "上海",
          zqze: "6395811",
          gzzkn: "89736.78",
          zqhs: "5",
          rzcb: "6.00%",
          ztzsyl: "35.00%",
          zrr: "张三",
          gxsj: "2019/01/10",
          options: [
            {
              value: "选项1",
              label: "黄金糕",
            },
            {
              value: "选项2",
              label: "双皮奶",
            },
            {
              value: "选项3",
              label: "蚵仔煎",
            },
            {
              value: "选项4",
              label: "龙须面",
            },
            {
              value: "选项5",
              label: "北京烤鸭",
            },
          ],
          value: "编辑",
        },
        {
          zcbbh: "b201910101",
          zcbmc: "东方一号",
          cz: "编辑",
          wd: "明细",
          mx: "明细",
          cyzt: "c1",
          syqzt: "L1",
          crfjc: "东方上海",
          cs: "上海",
          zqze: "639580",
          gzzkn: "99736.78",
          zqhs: "5",
          rzcb: "6.00%",
          ztzsyl: "35.00%",
          zrr: "张三",
          gxsj: "2019/01/10",
          options: [
            {
              value: "选项1",
              label: "黄金糕",
            },
            {
              value: "选项2",
              label: "双皮奶",
            },
            {
              value: "选项3",
              label: "蚵仔煎",
            },
            {
              value: "选项4",
              label: "龙须面",
            },
            {
              value: "选项5",
              label: "北京烤鸭",
            },
          ],
          value: "编辑",
        },
        {
          zcbbh: "b201910101",
          zcbmc: "东方一号",
          cz: "编辑",
          wd: "明细",
          mx: "明细",
          cyzt: "c1",
          syqzt: "L1",
          crfjc: "东方上海",
          cs: "上海",
          zqze: "639580",
          gzzkn: "149736.78",
          zqhs: "5",
          rzcb: "6.00%",
          ztzsyl: "35.00%",
          zrr: "张三",
          gxsj: "2019/01/10",
          options: [
            {
              value: "选项1",
              label: "黄金糕",
            },
            {
              value: "选项2",
              label: "双皮奶",
            },
            {
              value: "选项3",
              label: "蚵仔煎",
            },
            {
              value: "选项4",
              label: "龙须面",
            },
            {
              value: "选项5",
              label: "北京烤鸭",
            },
          ],
          value: "编辑",
        },
      ],
      searchData: {
        input: "",
        sdas: "",
        asd: "",
      },
      rightBut: [
        {
          type: "1",
          text: "批量上传",
          icon: "el-icon-upload2",
        },
        {
          type: "2",
          text: "批量下载",
          icon: "el-icon-c-scale-to-original",
        },
        {
          type: "2",
          text: "模板下载",
          icon: "el-icon-tickets",
        },
        {
          type: "2",
          text: "删除资产包",
          icon: "el-icon-document-delete",
        },
        {
          type: "2",
          text: "新建项目",
          icon: "el-icon-folder-add",
          color: "#2B57FF",
        },
        {
          type: "2",
          text: "收藏",
          icon: "el-icon-star-off",
          color: "#E96722",
          vertical: true,
        },
      ],

      multipleSelection: [],
    };
  },
  mounted() {},
  computed: {
    ...mapState({
      routerType: (state) => state.app.routerType,
    }),
  },

  methods: {
    toInformation() {
      console.log("跳转基本信息页面");

      this.$router.push("/beforeInvestment/markdown/addRoles");
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>

<style>
.table-content {
  padding: 0 20px;
}
</style>
