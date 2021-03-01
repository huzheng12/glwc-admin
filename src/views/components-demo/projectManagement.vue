<template>
  <router-type>
    <header-box
      :searchData="searchData"
      :inputData="inputData"
      :rightBut="rightBut"
      @emitChoosse="emitChoosse"
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
        <!-- <el-table-column fixed prop="zcbbh" label="资产包编号" width="120">
          <template slot-scope="scope">
            <i class="el-icon-star-off"></i>
            &nbsp;&nbsp;{{ scope.row.zcbbh }}
          </template>
        </el-table-column> -->
        <el-table-column fixed prop="name" label="资产包名称" width="120">
        </el-table-column>
          <el-table-column fixed prop="assetType" label="资产性质" width="120">
        </el-table-column>
        <el-table-column fixed label="操作" width="120">
          <template slot-scope="scope">
            <el-dropdown>
              <span class="el-dropdown-link">
               编辑<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="toInformation(scope.row.id, 0)"
                  >基本信息</el-dropdown-item
                >
                <el-dropdown-item @click.native="toInformation(scope.row.id, 1)"
                  >估值信息</el-dropdown-item
                >
                <el-dropdown-item @click.native="toInformation(scope.row.id, 2)"
                  >所属项目</el-dropdown-item
                >
                <el-dropdown-item @click.native="toInformation(scope.row.id, 3)"
                  >融资方案</el-dropdown-item
                >
                <el-dropdown-item @click.native="toInformation(scope.row.id, 4)"
                  >文件管理</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
        <el-table-column prop="beneficiaryName" label="收益权主体" width="120">
          <template slot-scope="scope">
            <span class="span_bottom">{{ scope.row.beneficiaryName }}</span>
          </template>
        </el-table-column>
           <el-table-column prop="transferor" label="出让方" width="120">
          <template slot-scope="scope">
            <span class="span_bottom">{{ scope.row.transferor }}</span>
          </template>
           </el-table-column>
        <el-table-column prop="transferorAbbr" label="出让方简称" width="120">
          <template slot-scope="scope">
            <span class="span_bottom">{{ scope.row.transferorAbbr }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="city" label="城市" width="120"> </el-table-column>
        <el-table-column prop="totalBalance" sortable label="债权总额" width="140">
        </el-table-column>
        <el-table-column prop="mostLikelyValuation" sortable label="估值_最可能" width="140">
        </el-table-column>
        <el-table-column prop="creditorNum" label="债券户数" width="120">
        </el-table-column>
        <el-table-column prop="financingCost" label="融资成本" width="120">
        </el-table-column>
        <el-table-column prop="reinvestmentRate" label="再投资收益率" width="120">
        </el-table-column>
        <el-table-column prop="responsible" label="责任人" width="120">
        </el-table-column>
        <el-table-column prop="updatedAt" label="更新时间" width="120">
        </el-table-column>
      </el-table>

      <pagination :tablePagination="tablePagination"></pagination>
    </div>
    <!--  模板下载弹窗 -->
    <template-download
      ref="assetDialog"
      :titleName="titleName"
      :bannerName="bannerName"
    ></template-download>
    <!-- 批量下载弹窗 -->
    <bulk-download ref="bulkDialog"></bulk-download>
    <!--新增资产包 -->
     <el-dialog title="新建资产包" :visible.sync="adddialogVisible" width="30%">
      <el-form label-position="right" label-width="120px">
        <el-form-item :required="true" label="资产包名称">
          <el-input v-model="name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="adddialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="newProjects">确 定</el-button>
      </span>
    </el-dialog>
  </router-type>
</template>

<script>
import headerBox from "./components/header";
import pagination from "./components/pagination";
// 模板下载弹窗 0r 批量上传
import templateDownload from "./components/templateDownload";
// 批量下载弹窗
import bulkDownload from "./components/bulkDownload";

import { packagesList } from "@/api/projectManagement/zcbgl";
import { projectsList,newAssetProjects } from "@/api/assetPackage/index";
export default {
  components: {
    headerBox,
    pagination,
    templateDownload,
    bulkDownload,
  },
  data() {
    return {
         name: "",
      titleName: "",
      bannerName: "",
      value1: null,
      tablePagination: { current: 1, size: 10, total: 10 },
      adddialogVisible: false,
      inputData: [
        // {
        //   type: "datePicker",
        //   prop: "sdas",
        //   placeholder: "请选择日期",
        //   prefixIcon: "el-icon-date",
        //   width: "140px",
        //   onInput: (a) => {
        //     console.log(a);
        //   },
        // },
        // {
        //   type: "Input",
        //   prop: "input",
        //   placeholder: "请输入地点",
        //   width: "140px",
        //   onInput: (a) => {
        //     console.log(a);
        //   },
        // },
        {
          type: "Input",
          prop: "global",
          placeholder: "请输入关键字查询",
          prefixIcon: "el-icon-search",
          onInput: (a) => {
              this.projectsList();
          },
        },
      ],
      searchData: {
        global: "",
      },
      tableData: [
        {
          packageId: 1,
          type: null,
          zcbbh: "b201910101",
          zcbmc: "资产包管理一号",
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
        }
      ],
      // searchData: {
      //   input: "",
      //   sdas: "",
      //   asd: "",
      // },
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
          type: "3",
          text: "模板下载",
          icon: "el-icon-tickets",
        },
        {
          type: "4",
          text: "删除资产包",
          icon: "el-icon-document-delete",
        },
        {
          type: "5",
          text: "新建资产包",
          icon: "el-icon-folder-add",
          color: "#2B57FF",
        },
        {
          type: "6",
          text: "收藏",
          icon: "el-icon-star-off",
          color: "#E96722",
          vertical: true,
        },
      ],

      multipleSelection: [],
    };
  },
  mounted() {
    console.log(22);
    // this.packagesList();
    // 获取资产包管理列表
    this.projectsList()
  },

  methods: {
    // 查询资产包列表
      projectsList() {
      function encode(str) {
        // 对字符串进行编码
        var encode = encodeURI(str);
        // 对编码的字符串转化base64
        var base64 = btoa(encode);
        return base64;
      }

      function toQueryPair(key, value) {
        if (typeof value == "undefined") {
          return `&${key}=`;
        }
        return `&${key}=${value}`;
      }

      function objToParam(param) {
        if (Object.prototype.toString.call(param) !== "[object Object]") {
          return "";
        }
        let queryParam = "";
        for (let key in param) {
          if (param.hasOwnProperty(key)) {
            let value = param[key];
            queryParam += toQueryPair(key, value);
          }
        }

        queryParam = queryParam.substr(1);
        return queryParam;
      }

      console.log('packageId',this.$route.params.packageId)
      if (this.$route.params.packageId) {
        this.searchData.packageId = this.$route.params.packageId;
      }
      for (const key in this.searchData) {
        if (!this.searchData[key]) {
          delete this.searchData[key];
        }
      }
      console.log('query:',encode(objToParam(this.searchData)))
      projectsList({
        query: encode(objToParam(this.searchData)),
      }).then((res) => {
        if (res.code === 0) {
          console.log('res.data',res.data)
          this.tableData = res.data;
        }
      });
    },
    // 确定新增
        newProjects() {
      if (!this.name) {
        return this.$message({
          message: "请输入资产包名称",
          type: "warning",
        });
      }
      newAssetProjects({ name: this.name }).then((res) => {
        if (res.code === 0) {
          this.projectsList();
          this.adddialogVisible = false;
          this.name = "";
          this.$message({
            message: "资产包新建成功",
            type: "success",
          });
        }
      });
    },
    
    //    projectsList(){
    //   //  console.log('11',this.searchDataParams.query,this.searchDataParams.sort)
    //   // listProjectsList(this.searchDataParams.query,this.searchDataParams.sort).then((res)=>{
    //   //   console.log(res.data)
    //   // })
    
    // },
    packagesList() {
      // 资产包列表获取
      packagesList().then((res) => {
        if (res.code === 0) {
          console.log(res);
        }
      });
    },
    routerJump(packageId) {
      // 点击跳转项目管理页面
      this.$router.push(`/beforeInvestment/markdown?packageId=${packageId}`);
    },
    headerRightClick(key) {},
    toInformation(id, key) {
      this.$router.push(`/beforeInvestment/index/essential/${id}/${key}`);
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
      console.log(val);
      this.multipleSelection = val;
    },
    emitChoosse(val) {
      console.log('val',val)
       // header  but  点击事件
      // if (key === "newProjects") {
      //   // 新建项目
      //   this.dialogVisible = true;
      //   // this.newProjects();
      // }
      console.log("val", val);
      if (val === "3") {
        this.titleName = "模板下载";
        this.bannerName = "估值底稿模板";
        this.$refs.assetDialog.dialogVisible = true;
      } else if (val === "2") {
        this.$refs.bulkDialog.dialogVisible = true;
      } else if (val === "1") {
        this.titleName = "批量上传";
        this.bannerName = "估值底稿上传";
        this.$refs.assetDialog.dialogVisible = true;
      }else if (val === '5'){
        this.adddialogVisible = true;
      }
    },
  },
};
</script>

<style>
.table-content {
  padding: 0 20px;
}
</style>
