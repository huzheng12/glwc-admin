<template>
  <router-type>
    <header-box
      :searchData="searchData"
      :inputData="inputData"
      :rightBut="rightBut"
      @emitChoosse="emitChoosse"
    ></header-box>
    <TableList
      :data="tableData"
      :option="tableOption"
      @changePageSize="changePageSize"
      @changeCurrentPage="changeCurrentPage"
      @changeSelect="changeSelect"
    ></TableList>

    <el-dialog :visible.sync="dialogVisible" :center="true">
      <el-upload
        class="com-text-center"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <!-- <div class="el-upload__tip" slot="tip">
          只能上传jpg/png文件，且不超过500kb
        </div> -->
      </el-upload>
    </el-dialog>
  </router-type>
</template>

<script>
import headerBox from "../../components-demo/components/header";
import TableList from "./components/table";
import { getList, upload, download } from "@/api/fileManagement/index";

export default {
  components: {
    headerBox,
    TableList,
  },
  data() {
    return {
      tableOption: {
        column: [
          {
            label: "名字",
            prop: "name",
          },
          {
            label: "资源类别",
            prop: "catalog",
          },
          {
            label: "创建时间",
            prop: "createdAt",
            isTime: true,
            custom: true,
          },
          {
            label: "更新时间",
            prop: "updatedAt",
            isTime: true,
            custom: true,
          },
        ],
      },
      tableData: [],
      dialogVisible: false,
      page: { current: 1, size: 10, total: 0 },
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
      multipleSelect: [],
    };
  },
  mounted() {
    this.projectsList();
  },

  methods: {
    emitChoosse(key) {
      console.log(this.multipleSelection);
      if (key == 1) {
        this.dialogVisible = true;
      } else if (key == 2) {
        for (let index = 0; index < this.multipleSelect.length; index++) {
          const element = this.multipleSelect[index];
          console.log(element);
          download(element).then((res) => {
            if (res.code == 0) {
              const link = document.createElement("a");
              link.setAttribute("download", "");
              link.setAttribute("href", res.data);
              link.click();
              document.body.removeChild(link);
            } else {
              this.$message({
                message: "请仅选择文件",
                type: "warning",
              });
            }
          });
        }
      }
    },
    projectsList() {
      getList({
        catalog: "资产包",
      }).then((res) => {
        if (res.code === 0) {
          this.tableData = res.data;
        }
      });
    },
    changePageSize(val) {
      this.page.size = val;
      this.getList();
    },
    changeCurrentPage(val) {
      this.page.current = val;
      this.getList();
    },
    changeSelect(val) {
      val = val.map((item) => item.id);
      this.multipleSelect = val;
      console.log(this.multipleSelect);
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
