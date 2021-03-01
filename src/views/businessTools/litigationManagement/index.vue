<template>
  <div>
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
        <template slot="btns">
            <span class="btn-detail">详情</span>
        </template>
    </TableList>
  </div>
</template>

<script>
import headerBox from "@/views/asset-accounting/components/header";
import TableList from "@/layout/components/Table";
import TableHeader from "@/layout/components/Table/header";
export default {
  components: { TableList, TableHeader,headerBox },
  data() {
    return {
      page: {},
      data: [
          {
           caseNumber:'案号',
           name:'name',
           projectName:'projectName',
           packageName:'packageName',
           debtor:'debtor',
           lawsuitAging:'lawsuitAging',
           startTime:'startTime',
           court:'court',
           serviceProviderName:'serviceProviderName'
          }
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
            prop: "startTime",
          },{
            label: "管辖法院",
            prop: "court",
          },
          {
            label: "服务商",
            prop: "serviceProviderName",
          },
        ],
      },
      headerProps: [
        {
          prop: "caseNumber",
          type: "input",
          value: null,
          hint: "请输入关键字查询",
        },
      ],
      multipleSelect:[],
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
          text: "模板下载",
          icon: "el-icon-tickets",
        },
        {
          type: "4",
          text: "删除诉讼",
          icon: "el-icon-document-delete",
        },
        {
          type: "5",
          text: "添加诉讼",
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
      inputData: [
        // {
        //   type: "datePicker",
        //   prop: "sdas",
        //   placeholder: "请选择日期111",
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
          prop: "asd",
          placeholder: "请输入关键字查询",
          prefixIcon: "el-icon-search",
          onInput: (a) => {
            console.log(a);
          },
        },
      ],
    };
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
    getList(){

    },
    emitChoosse(val) {
      console.log("val", val);
      if (val === "6") {
        // this.$refs.assetAccounting.dialogVisible = true;
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
  },
};
</script>
<style>
.btn-detail{
    color:#2B57FF;
}
</style>
