<template>
  <router-type>
    <header-box
      :searchData="searchData"
      :inputData="inputData"
      :rightBut="rightBut"
      @emitChoosse="emitChoosse"
    ></header-box>
    <div class="table-content">
      <!-- 项目管理页面 -->
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column fixed prop="id" label="项目编号" width="120">
          <template slot-scope="scope">
            <i class="el-icon-star-off"></i>
            &nbsp;&nbsp;{{ scope.row.id }}
          </template>
        </el-table-column>
        <el-table-column fixed prop="name" label="项目名称" width="120">
        </el-table-column>
        <el-table-column fixed label="操作" width="90" align="left">
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
                  >尽调</el-dropdown-item
                >
                <el-dropdown-item @click.native="toInformation(scope.row.id, 2)"
                  >担保</el-dropdown-item
                >
                <el-dropdown-item @click.native="toInformation(scope.row.id, 3)"
                  >诉讼</el-dropdown-item
                >
                <el-dropdown-item @click.native="toInformation(scope.row.id, 4)"
                  >估值</el-dropdown-item
                >
                <el-dropdown-item @click.native="toInformation(scope.row.id, 5)"
                  >文件管理</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
        <el-table-column fixed label="文档" width="120">
          <el-link type="primary">明细</el-link>
        </el-table-column>
        <el-table-column label="所属资产包" width="120" prop="packageName">
          <template slot-scope="scope">
            <span class="span_bottom">{{ scope.row.packageName }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="debtor" width="120" label="债务人">
          <template slot-scope="scope">
            <span class="span_bottom">{{ scope.row.debtor }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="latestSubordinate" width="120" label="最新从属">
          <template slot-scope="scope">
            <span class="span_bottom">{{ scope.row.latestSubordinate }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="creditorBank" width="120" label="债权银行">
        </el-table-column>
        <el-table-column prop="city" label="城市" width="120">
        </el-table-column>
        <el-table-column prop="gzzkn" label="债券总额" width="120">
        </el-table-column>
        <el-table-column prop="guarantees" label="保证方式" width="320">
          <template slot-scope="scope">
            <div
              class="guarantees"
              v-for="(item, index) in scope.row.guarantees"
              :key="index"
            >
              <span class="tees-fs">
                {{ guaranteesType(item) }}
              </span>
              <el-divider
                v-if="index !== scope.row.guarantees.length - 1"
                direction="vertical"
              ></el-divider>
            </div>
          </template>
        </el-table-column>
      </el-table>

      <pagination :tablePagination="tablePagination"></pagination>
    </div>
    <el-dialog title="新建项目" :visible.sync="dialogVisible" width="30%">
      <el-form label-position="right" label-width="80px">
        <el-form-item :required="true" label="项目名称">
          <el-input v-model="name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="newProjects">确 定</el-button>
      </span>
    </el-dialog>
  </router-type>
</template>

<script>
import headerBox from "../components/header";
import pagination from "../components/pagination";
import {
  projectsList,
  newProjects,
  delProjects,
} from "@/api/projectManagement/index";

export default {
  components: {
    headerBox,
    pagination,
  },
  data() {
    return {
      dialogVisible: false,
      name: "",
      tablePagination: { current: 1, size: 10, total: 10 },
      inputData: [
        // {
        //   type: "datePicker",
        //   prop: "createdAt",
        //   placeholder: "请选择日期",
        //   prefixIcon: "el-icon-date",
        //   width: "140px",
        //   onInput: (a) => {
        //     this.projectsList();
        //   },
        // },
        // {
        //   type: "Input",
        //   prop: "city",
        //   placeholder: "请输入地点",
        //   width: "140px",
        //   onInput: (a) => {
        //     this.projectsList();
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
      tableData: [],
      searchData: {
        global: "",
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
          type: "delProjects",
          text: "删除项目",
          icon: "el-icon-document-delete",
        },
        {
          type: "newProjects",
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
  mounted() {
    this.projectsList();
  },

  methods: {
    emitChoosse(key) {
      // header  but  点击事件
      if (key === "newProjects") {
        // 新建项目
        this.dialogVisible = true;
        // this.newProjects();
      } else if (key === "delProjects") {
        // 删除项目
        this.delProjects();
      }
    },
    delProjects() {
      // 删除项目  目前支持单条删除
      if (this.multipleSelection.length > 1) {
        console.log("只能删除一条");
      } else if (this.multipleSelection.length === 0) {
        console.log("请选择数据");
      } else {
        delProjects(this.multipleSelection[0].id).then((res) => {
          if (res.code === 0) {
            this.projectsList();
            this.$message({
              message: "项目删除成功",
              type: "success",
            });
          }
        });
      }
    },

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
      if (this.$route.params.packageId) {
        this.searchData.packageId = this.$route.params.packageId;
      }
      for (const key in this.searchData) {
        if (!this.searchData[key]) {
          delete this.searchData[key];
        }
      }
      projectsList({
        query: encode(objToParam(this.searchData)),
      }).then((res) => {
        if (res.code === 0) {
          res.data.map((item) => {
            var arr = item.guarantees.split("|");
            console.log(arr);
            item.guarantees = arr;
          });
          this.tableData = res.data;
        }
      });
    },
    guaranteesType(key) {
      //  保证方式   渲染
      switch (key) {
        case "bail":
          return "保证人";
        case "mortgage":
          return "抵押物";
        case "pledge":
          return "质押物";
        case "otherGuarantee":
          return "其他保证";
        case "lawsuit":
          return "诉讼";
        default:
          break;
      }
    },
    newProjects() {
      if (!this.name) {
        return this.$message({
          message: "请输入项目名称",
          type: "warning",
        });
      }
      newProjects({ name: this.name }).then((res) => {
        if (res.code === 0) {
          this.projectsList();
          this.dialogVisible = false;
          this.name = "";
          this.$message({
            message: "项目新建成功",
            type: "success",
          });
        }
      });
    },
    headerRightClick(key) {},
    toInformation(id, key) {
      this.$router.push(`/beforeInvestment/markdown/essential/${id}/${key}`);
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
  },
};
</script>

<style scoped>
.table-content {
  padding: 0 20px;
}

.guarantees {
  display: inline-block;
}
</style>
