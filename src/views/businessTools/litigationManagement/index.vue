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
        <template slot="btns">
            <span class="btn-detail" @click="toDetail">详情</span>
        </template>
    </TableList>
  </router-type>
</template>

<script>
import headerBox from "@/views/asset-accounting/components/header";
import TableList from "@/layout/components/Table";
import TableHeader from "@/layout/components/Table/header";
import {
  getList,
} from "@/api/litigationManagement/index";
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
        {
          type: "Input",
          prop: "global",
          placeholder: "请输入关键字查询",
          prefixIcon: "el-icon-search",
          onInput: (a) => {
            this.getList(a)
          },
        },
      ],
    };
  },
  created() {
      this.getList()
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
    toDetail(){
        this.$router.push(`/businessTools/litigationManagement/detail`);
    }
  },
};
</script>
<style>
.btn-detail{
    color:#2B57FF;
}
</style>
