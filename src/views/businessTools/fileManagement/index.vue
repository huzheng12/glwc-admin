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
        <el-table-column prop="a" label="文件名称">
          <template slot-scope="scope">
            <i class="iconfont iconfontleft bff">&#xe649;</i>
            &nbsp;&nbsp;{{ scope.row.a }}
          </template>
        </el-table-column>
        <el-table-column prop="b" label="文件编号"> </el-table-column>

        <el-table-column label="负责人" prop="c">
          <template slot-scope="scope">
            <!-- <span class="span_bottom">{{ scope.row.packageId }}</span> -->
            <span>{{ scope.row.c }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="d" label="修改日期">
          <template slot-scope="scope">
            <span>{{ scope.row.d }}</span>
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
import headerBox from "../../components-demo/components/header";
import pagination from "../../components-demo/components/pagination";
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
      tablePagination: { current: 1, size: 10, total: 0 },
      inputData: [
        {
          type: "Input",
          prop: "global",
          placeholder: "搜索文件",
          prefixIcon: "el-icon-search",
          onInput: (a) => {
            this.projectsList();
          },
        },
      ],
      tableData: [
        {
          a: "上海第一人民法院人民法院.PDF",
          b: "（2018）沪02民初1183号",
          c: "吴思远",
          d: "2020/12/20",
        },
        {
          a: "上海第一人民法院人民法院.PDF",
          b: "（2018）沪02民初1183号",
          c: "吴思远",
          d: "2020/12/20",
        },
      ],
      searchData: {
        global: "",
      },
      rightBut: [
        {
          type: "2",
          text: "下载",
          alicon: "iconxiazai",
        },
        {
          type: "1",
          text: "上传",
          alicon: "iconpiliangshangchuan",
        },

        {
          type: "2",
          text: "收藏",
          alicon: "iconshoucang",
          color: "#E96722",
        },
      ],

      multipleSelection: [],
    };
  },
  mounted() {
    // this.projectsList();
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
