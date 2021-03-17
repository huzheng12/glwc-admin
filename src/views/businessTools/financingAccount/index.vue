<template>
  <router-type>
    <header-box
      :searchData="searchData"
      :inputData="inputData"
      :rightBut="rightBut"
      @emitChoosse="emitChoosse"
    ></header-box>
    <TableList
      :option="tableProps"
      :data="data"
      :page="page"
      @changePageSize="changePageSize"
      @changeCurrentPage="changeCurrentPage"
      @changeSelect="changeSelect"
    >
      <template slot="btns" scope="scope">
        <span class="btn-detail" @click="toDetail(scope.row)">详情</span>
      </template>
    </TableList>
    <dialog-vis
      :dataObj="info"
      :rowData="rowData"
      title="新增诉讼"
      ref="dialog"
      labelWidth="120px"
      @submit="submit"
    ></dialog-vis>
  </router-type>
</template>

<script>
import headerBox from "@/views/asset-accounting/components/header";
import TableList from "@/layout/components/Table";
import TableHeader from "@/layout/components/Table/header";
import dialogVis from "@/components/dialogVis";
import { getList, add, del } from "@/api/litigationManagement/index";
export default {
  components: { TableList, TableHeader, headerBox, dialogVis },
  data() {
    return {
      page: {},
      data: [
        {
          caseNumber: "案号",
          name: "name",
          projectName: "projectName",
          packageName: "packageName",
          debtor: "debtor",
          lawsuitAging: "lawsuitAging",
          startTime: "startTime",
          court: "court",
          serviceProviderName: "serviceProviderName",
        },
      ],
      tableProps: {
        column: [
          {
            label: "案号",
            prop: "caseNumber",
          },
          {
            label: "诉讼事项",
            prop: "name",
          },
          {
            label: "所属项目",
            prop: "projectName",
          },
          {
            label: "所属资产包",
            prop: "packageName",
          },
          {
            label: "债务⼈",
            prop: "debtor",
          },
          {
            label: "诉讼时效",
            prop: "lawsuitAging",
          },
          {
            label: "开始时间",
            prop: "startDate",
            isTime: true,
            custom: true,
          },
          {
            label: "管辖法院",
            prop: "court",
          },
          {
            label: "服务商",
            prop: "serviceProviderName",
          },
        ],
      },
      multipleSelect: [],
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
          type: "3",
          text: "删除台账",
          icon: "el-icon-document-delete",
        },
        {
          type: "4",
          text: "添加台账",
          icon: "el-icon-folder-add",
          color: "#2B57FF",
        },
      ],
      inputData: [
        {
          type: "select",
          prop: "global",
          placeholder: "融资编号",
          options: [
            {
              value: "选项",
              label: "选项",
            },
          ],
        },
        {
          type: "select",
          prop: "global",
          placeholder: "融资主体",
          options: [
            {
              value: "选项",
              label: "选项",
            },
          ],
        },
        {
          type: "select",
          prop: "global",
          placeholder: "对应资产包",
          options: [
            {
              value: "选项",
              label: "选项",
            },
          ],
        },
        {
          type: "select",
          prop: "global",
          placeholder: "融资金额",
          options: [
            {
              value: "选项",
              label: "选项",
            },
          ],
        },
        {
          type: "datePicker",
          prop: "global",
          placeholder: "到期日",
          width:"120px"
        },
      ],
      rowData: [
        {
          left: {
            prop: "caseNumber",
            label: "案件编号",
            disabled: true,
          },
          right: {
            prop: "caseSummary",
            label: "案件摘要",
          },
        },
        {
          left: {
            prop: "lawsuitStage",
            label: "诉讼阶段",
          },
          right: {
            prop: "projectName",
            label: "所属项目",
          },
        },
        {
          left: {
            prop: "packageName",
            label: "所属资产包",
          },
          right: {
            prop: "contractId",
            label: "授权合同编号",
          },
        },
        {
          left: {
            prop: "subjectName",
            label: "涉及主体",
          },
          right: {
            prop: "court",
            label: "所属法院",
          },
        },
        {
          left: {
            prop: "lawsuitAging",
            label: "诉讼时效",
          },
          right: {
            prop: "serviceProviderName",
            label: "服务商",
          },
        },
        {
          left: {
            prop: "usage",
            label: "用途",
          },
          right: {
            prop: "startDate",
            label: "开始时间",
            type: "Picker",
          },
        },
        {
          left: {
            prop: "endDate",
            label: "结束时间",
            type: "Picker",
          },
          right: {
            prop: "latestDate",
            label: "更新时间",
            type: "Picker",
          },
        },
      ],
      info: {},
    };
  },
  created() {
    this.getList();
  },
  methods: {
    onSearch(val) {
      this.getList(val);
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
    },
    getList() {
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
      getList({
        query: encode(objToParam(this.searchData)),
      }).then((res) => {
        this.data = res.data;
      });
    },
    emitChoosse(val) {
      console.log("val", val);
      if (val === "5") {
        this.$refs.dialog.visible = true;
        this.data = JSON.parse(JSON.stringify(this.projectData));
      }
      if (val === "4") {
        console.log(this.multipleSelect);
        if (this.multipleSelect.length == 0) {
          this.$message({
            message: "至少选择一项",
            type: "info",
          });
          return;
        }
        this.$alert("确定要删除嘛", "温馨提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          showCancelButton: true,
          callback: (action) => {
            if (action == "confirm") {
              for (let index = 0; index < this.multipleSelect.length; index++) {
                const element = this.multipleSelect[index];
                del(element).then((res) => {
                  if (res.code === 0) {
                    this.$message({
                      message: "删除成功",
                      type: "success",
                    });
                  }
                });
              }
            }
          },
        });
      }
      // if (val === "3") {
      //   this.titleName = "模板下载";
      //   this.bannerName = "估值底稿模板";
      //   this.$refs.assetDialog.dialogVisible = true;
      // } else if (val === "2") {
      //   this.$refs.bulkDialog.dialogVisible = true;
      // } else if (val === "1") {
      //   this.titleName = "批量上传";
      //   this.bannerName = "估值底稿上传";
      //   this.$refs.assetDialog.dialogVisible = true;
      // }
    },
    toDetail(row) {
      this.$router.push(
        `/businessTools/litigationManagement/detail?id=${row.id}`
      );
    },
    submit() {
      add(this.info).then((res) => {
        if (res.code === 0) {
          this.$refs.dialog.visible = false;
          this.$emit("unpdata");
          this.$message({
            message: "新增成功",
            type: "success",
          });
        }
      });
    },
  },
};
</script>
<style>
.btn-detail {
  color: #2b57ff;
}
</style>
