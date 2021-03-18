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
import { getList, add, del } from "@/api/financingAccount/index";
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
            label: "融资编号",
            prop: "id",
          },
          {
            label: "融资主体",
            prop: "financeSubjectName",
          },
          {
            label: "资金用途",
            prop: "fundUsage",
          },
          {
            label: "资金提供方",
            prop: "fundProvider",
          },
        //   {
        //     label: "对应资产包",
        //     prop: "debtor",
        //   },
          {
            label: "协定融资额",
            prop: "requiredBalance",
          },
          {
            label: "到位融资额",
            prop: "readyBalance",
            // isTime: true,
            // custom: true,
          },
          {
            label: "融资本金余额",
            prop: "principleBalance",
          },
        //   {
        //     label: "还款金额总汇",
        //     prop: "serviceProviderName",
        //   },
          {
            label: "期限",
            prop: "duePeriod",
          },
          {
            label: "到期日",
            prop: "dueDate",
            isTime: true,
            custom: true,
          },
          {
            label: "利率",
            prop: "interestRate",
          },
          {
            label: "增信主体",
            prop: "ceSubjectName",
          },
          {
            label: "增信措施",
            prop: "ceMethod",
          },
          {
            label: "本期应还日期",
            prop: "currentPayBackDate",
            isTime: true,
            custom: true,
          },
          {
            label: "本期应还金额",
            prop: "currentPayBackBalance",
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
            prop: "packageId",
            label: "资产包ID",
            disabled: true,
          },
          right: {
            prop: "financeSubjectId",
            label: "融资主体ID",
          },
        },
        {
          left: {
            prop: "fundUsage",
            label: "资⾦⽤途",
          },
          right: {
            prop: "资⾦提供⽅",
            label: "所属项目",
          },
        },
        {
          left: {
            prop: "requiredBalance",
            label: "协定融资额",
          },
          right: {
            prop: "readyBalance",
            label: "到位资⾦额",
          },
        },
        {
          left: {
            prop: "principleBalance",
            label: "融资本⾦余额",
          },
          right: {
            prop: "issueDate",
            label: "融资协议签署⽇期",
            type: "Picker",
          },
        },
        {
          left: {
            prop: "duePeriod",
            label: "期限",
          },
          right: {
            prop: "duePeriodUnit",
            label: "期限单位（⽉/年）",
          },
        },
        {
          left: {
            prop: "dueDate",
            label: "到期⽇",
            type: "Picker",
          },
          right: {
            prop: "interestRate",
            label: "利率",
          },
        },
        {
          left: {
            prop: "ceSubjectId",
            label: "增信主体ID",
          },
          right: {
            prop: "ceMethod",
            label: "增信措施",
          },
        },
        {
          left: {
            prop: "currentPayBackDate",
            label: "本期应还⽇期",
            type: "Picker",
          },
          right: {
            prop: "currentPayBackBalance",
            label: "本期应还⾦额",
            type: "Picker",
          },
        },
        {
          left: {
            prop: "remark",
            label: "备注",
          },
          right: null,
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
      if (val === "4") {
        this.$refs.dialog.visible = true;
        this.data = JSON.parse(JSON.stringify(this.projectData));
      }
      if (val === "3") {
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
        `/businessTools/financingAccount/detail?id=${row.id}`
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
